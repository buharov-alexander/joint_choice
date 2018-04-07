package ru.bukharov.jointchoice.server.tmdb.service;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.jointchoice.server.domain.movie.Movie;
import ru.bukharov.jointchoice.server.domain.movie.MoviePoster;
import ru.bukharov.jointchoice.server.repository.movie.MovieRepository;
import ru.bukharov.jointchoice.server.tmdb.dto.TmdbMovieDTO;

import javax.validation.ValidationException;
import java.util.List;

@Service
public class TmdbServiceImpl implements TmdbService {

    private static final String TMDB_SERVICE_URL = "https://api.themoviedb.org/3";
    private static final String API_KEY_PARAM = "api_key=3d48f25bce5b4986324f82122df4f932";
    private static final String RU_LANG_PARAM = "&language=ru-ru";
    private static final String QUERY = "&query=";
    private static final String START_PARAM = "?" + API_KEY_PARAM + RU_LANG_PARAM;
    private static final String MOVIE = "/movie";
    private static final String SEARCH_MOVIE = "/search/movie";

    @Autowired
    private JsonTmdbService jsonTmdbService;
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private TmdbPosterService tmdbPosterService;

    private Logger log = LoggerFactory.getLogger(TmdbServiceImpl.class);

    @Override
    public TmdbMovieDTO getTmdbMovie(Long tmdbMovieId) throws Exception {
        validateId(tmdbMovieId);
        String url = TMDB_SERVICE_URL + MOVIE + "/" + tmdbMovieId + START_PARAM;
        return jsonTmdbService.getTmdbMovieFromUrl(url);
    }

    @Override
    public Movie saveTmdbMovie(Long tmdbMovieId) throws Exception {
        TmdbMovieDTO tmdbMovieDTO = getTmdbMovie(tmdbMovieId);

        Movie movie = convertTmdbMovieDtoToMovie(tmdbMovieDTO);
        movie = movieRepository.save(movie);
        return movie;
    }

    @Override
    public List<TmdbMovieDTO> searchTmdbMovies(String query) throws Exception {
        String url = TMDB_SERVICE_URL + SEARCH_MOVIE + START_PARAM + QUERY + query;
        return jsonTmdbService.getTmdbMovieListFromUrl(url);
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

        String posterPath = tmdbMovieDTO.getPosterPath();
        if (StringUtils.isNotEmpty(posterPath)) {
            MoviePoster moviePoster = new MoviePoster();

            byte[] image = tmdbPosterService.loadPoster(posterPath);
            moviePoster.setImage(image);
            moviePoster.setName(tmdbMovieDTO.getTitle());
            movie.setPoster(moviePoster);
        }

        return movie;
    }
}
