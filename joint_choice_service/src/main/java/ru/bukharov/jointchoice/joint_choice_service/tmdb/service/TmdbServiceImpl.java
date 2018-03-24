package ru.bukharov.jointchoice.joint_choice_service.tmdb.service;

import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.jointchoice.joint_choice_service.domain.movie.Movie;
import ru.bukharov.jointchoice.joint_choice_service.json.JsonService;
import ru.bukharov.jointchoice.joint_choice_service.repository.movie.MovieRepository;
import ru.bukharov.jointchoice.joint_choice_service.tmdb.dto.TmdbMovieDTO;

import javax.validation.ValidationException;
import java.io.IOException;

@Service
public class TmdbServiceImpl implements TmdbService {

    private static final String TMDB_SERVICE_URL = "https://api.themoviedb.org/3";
    private static final String API_KEY_PARAM = "api_key=3d48f25bce5b4986324f82122df4f932";
    private static final String RU_LANG_PARAM = "&language=ru-ru";
    private static final String START_PARAM = "?" + API_KEY_PARAM + RU_LANG_PARAM;
    private static final String MOVIE = "/movie";

    @Autowired
    private JsonService jsonService;
    @Autowired
    private MovieRepository movieRepository;
    private Logger log = LoggerFactory.getLogger(TmdbServiceImpl.class);

    @Override
    public TmdbMovieDTO getTmdbMovie(Long tmdbMovieId) throws Exception {
        validateId(tmdbMovieId);
        try {
            String url = TMDB_SERVICE_URL + MOVIE + "/" + tmdbMovieId + START_PARAM;
            JSONObject jsonObject = jsonService.getJsonFromUrl(url);
            return parseMovieJson(jsonObject);
        } catch (IOException | JSONException e) {
            log.error(e.getMessage(), e);
            throw new Exception(String.format("Cannot get movie by %s: %s", tmdbMovieId, e.getMessage()), e);
        }
    }

    @Override
    public Movie saveTmdbMovie(Long tmdbMovieId) throws Exception {
        TmdbMovieDTO tmdbMovieDTO = getTmdbMovie(tmdbMovieId);

        Movie movie = convertTmdbMovieDtoToMovie(tmdbMovieDTO);
        movie = movieRepository.save(movie);
        return movie;
    }

    private void validateId(Long tmdbMovieId) {
        if (tmdbMovieId == null || tmdbMovieId <= 0) {
            throw new ValidationException(String.format("ID should be a positive integer"));
        }
    }

    private Movie convertTmdbMovieDtoToMovie(TmdbMovieDTO tmdbMovieDTO) {
        Movie movie = new Movie();
        movie.setTmdbId(tmdbMovieDTO.getId());
        movie.setTitle(tmdbMovieDTO.getTitle());
        movie.setOriginalTitle(tmdbMovieDTO.getOriginalTitle());
        movie.setDescription(tmdbMovieDTO.getDescription());
        return movie;
    }

    private TmdbMovieDTO parseMovieJson(JSONObject jsonObject) throws Exception {
        Long id = jsonObject.getLong("id");
        String title = jsonObject.getString("title");
        String originalTitle = jsonObject.getString("original_title");
        String description = jsonObject.getString("overview");

        TmdbMovieDTO tmdbMovieDTO = new TmdbMovieDTO();
        tmdbMovieDTO.setId(id);
        tmdbMovieDTO.setTitle(title);
        tmdbMovieDTO.setOriginalTitle(originalTitle);
        tmdbMovieDTO.setDescription(description);

        return tmdbMovieDTO;
    }
}
