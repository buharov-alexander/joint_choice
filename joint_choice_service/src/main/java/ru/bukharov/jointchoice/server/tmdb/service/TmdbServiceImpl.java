package ru.bukharov.jointchoice.server.tmdb.service;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.bukharov.jointchoice.server.core.service.PosterType;
import ru.bukharov.jointchoice.server.core.service.RequestService;
import ru.bukharov.jointchoice.server.moves.domain.Movie;
import ru.bukharov.jointchoice.server.moves.service.MovieService;
import ru.bukharov.jointchoice.server.tmdb.dto.TmdbMovieDTO;

import java.net.URLEncoder;
import java.util.List;

@Service
class TmdbServiceImpl implements TmdbService {

    private static final String TMDB_SERVICE_URL = "https://api.themoviedb.org/3";
    private static final String API_KEY_PARAM = "api_key=3d48f25bce5b4986324f82122df4f932";
    private static final String RU_LANG_PARAM = "&language=ru-ru";
    private static final String QUERY = "&query=";
    private static final String START_PARAM = "?" + API_KEY_PARAM + RU_LANG_PARAM;
    private static final String MOVIE = "/movie";
    private static final String SEARCH_MOVIE = "/search/movie";

    @Autowired
    private RequestService requestService;
    @Autowired
    private JsonTmdbService jsonTmdbService;
    @Autowired
    private TmdbPosterService tmdbPosterService;

    private Logger log = LoggerFactory.getLogger(TmdbServiceImpl.class);

    @Override
    public TmdbMovieDTO getTmdbMovie(Long tmdbMovieId) throws Exception {
        validateId(tmdbMovieId);

        String url = TMDB_SERVICE_URL + MOVIE + "/" + tmdbMovieId + START_PARAM;
        JSONObject json = requestService.getJsonFromUrl(url);
        return jsonTmdbService.parseTmdbMovieJson(json);
    }

    @Override
    public List<TmdbMovieDTO> searchTmdbMovies(String query) throws Exception {
        validateQuery(query);

        query = URLEncoder.encode(query, "UTF-8");
        String url = TMDB_SERVICE_URL + SEARCH_MOVIE + START_PARAM + QUERY + query;
        JSONObject json = requestService.getJsonFromUrl(url);
        return jsonTmdbService.parseMovieListJson(json);
    }

    @Override
    public byte[] getMoviePoster(Long tmdbMovieId, PosterType posterType) throws Exception {
        TmdbMovieDTO tmdbMovieDTO = getTmdbMovie(tmdbMovieId);
        return tmdbPosterService.loadPoster(tmdbMovieDTO.getPosterPath(), posterType);
    }

    @Override
    @Transactional
    public void saveMoviePoster(String posterPath) {
        tmdbPosterService.loadAndSavePoster(posterPath, PosterType.SMALL);
        tmdbPosterService.loadAndSavePoster(posterPath, PosterType.MIDDLE);
    }

    private void validateQuery(String query) {
        if (StringUtils.isEmpty(query)) {
            String mes = "Search query is empty";
            log.warn(mes);
            throw new IllegalArgumentException(mes);
        }
    }

    private void validateId(Long tmdbMovieId) {
        if (tmdbMovieId == null || tmdbMovieId <= 0) {
            String mes = String.format("TMDB Movie ID %d is not a positive integer", tmdbMovieId);
            log.warn(mes);
            throw new IllegalArgumentException(mes);
        }
    }
}
