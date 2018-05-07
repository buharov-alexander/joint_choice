package ru.bukharov.jointchoice.server.tmdb.service;

import ru.bukharov.jointchoice.server.core.service.PosterType;
import ru.bukharov.jointchoice.server.moves.domain.Movie;
import ru.bukharov.jointchoice.server.tmdb.dto.TmdbMovieDTO;

import java.util.List;

public interface TmdbService {

    TmdbMovieDTO getTmdbMovie(Long tmdbMovieId) throws Exception;

    List<TmdbMovieDTO> searchTmdbMovies(String query) throws Exception;

    byte[] getMoviePoster(Long tmdbMovieId, PosterType posterType) throws Exception;

    void saveMoviePoster(String posterPath);
}
