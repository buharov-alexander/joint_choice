package ru.bukharov.jointchoice.server.tmdb.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.jointchoice.server.json.JsonService;
import ru.bukharov.jointchoice.server.tmdb.dto.TmdbMovieDTO;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class JsonTmdbService {

    private static final String ID = "id";
    private static final String TITLE = "title";
    private static final String ORIGINAL_TITLE = "original_title";
    private static final String OVERVIEW = "overview";
    private static final String POSTER_PATH = "poster_path";

    @Autowired
    private JsonService jsonService;

    private Logger log = LoggerFactory.getLogger(JsonTmdbService.class);

    public TmdbMovieDTO getTmdbMovieFromUrl(String url) throws Exception {
        return parseTmdbMovieJson(getJsonFromUrl(url));
    }

    public List<TmdbMovieDTO> getTmdbMovieListFromUrl(String url) throws Exception {
        JSONObject jsonObject = getJsonFromUrl(url);
        return parseMovieListJson(jsonObject.getJSONArray("results"));
    }

    private JSONObject getJsonFromUrl(String url) throws Exception {
        try {
            return jsonService.getJsonFromUrl(url);
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            throw new Exception(String.format("Cannot get json from %s: %s", url, e.getMessage()), e);
        }
    }

    private List<TmdbMovieDTO> parseMovieListJson(JSONArray results) {
        List<TmdbMovieDTO> res = new ArrayList<>();
        for (Object jsonObj : results) {
            res.add(parseTmdbMovieJson((JSONObject) jsonObj));
        }
        return res;
    }

    private TmdbMovieDTO parseTmdbMovieJson(JSONObject jsonObject) {
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
