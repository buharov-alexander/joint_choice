package ru.bukharov.jointchoice.server.tmdb.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import ru.bukharov.jointchoice.server.tmdb.dto.TmdbMovieDTO;

import java.util.ArrayList;
import java.util.List;

@Service
class JsonTmdbService {

    private static final String ID = "id";
    private static final String TITLE = "title";
    private static final String ORIGINAL_TITLE = "original_title";
    private static final String OVERVIEW = "overview";
    private static final String POSTER_PATH = "poster_path";
    private static final String RESULTS = "results";

    protected List<TmdbMovieDTO> parseMovieListJson(JSONObject json) {
        JSONArray results = json.getJSONArray(RESULTS);
        List<TmdbMovieDTO> res = new ArrayList<>();
        for (Object jsonObj : results) {
            res.add(parseTmdbMovieJson((JSONObject) jsonObj));
        }
        return res;
    }

    protected TmdbMovieDTO parseTmdbMovieJson(JSONObject jsonObject) {
        Long id = jsonObject.getLong(ID);
        String title = jsonObject.getString(TITLE);
        String originalTitle = jsonObject.getString(ORIGINAL_TITLE);
        String description = jsonObject.getString(OVERVIEW);

        TmdbMovieDTO tmdbMovieDTO = new TmdbMovieDTO();
        tmdbMovieDTO.setId(id);
        tmdbMovieDTO.setTitle(title);
        tmdbMovieDTO.setOriginalTitle(originalTitle);
        tmdbMovieDTO.setDescription(description);

        if (!jsonObject.isNull(POSTER_PATH)) {
            tmdbMovieDTO.setPosterPath(jsonObject.getString(POSTER_PATH));
        }

        return tmdbMovieDTO;
    }
}
