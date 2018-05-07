package ru.bukharov.jointchoice.server.moves.service;

import ru.bukharov.jointchoice.server.core.service.PosterType;
import ru.bukharov.jointchoice.server.moves.domain.Movie;
import ru.bukharov.jointchoice.server.moves.exception.MovieServiceException;

import java.util.List;

public interface MovieService {

    Movie getMovie(Long id) throws MovieServiceException;

    List<Movie> getMovies();

    Movie save(Movie movie);

    byte[] getMoviePoster(Long tmdbMovieId, PosterType posterType) throws MovieServiceException;

    Movie saveTmdbMovie(Long tmdbMovieId) throws Exception;

    Movie getMovieByTmdbMovieId(Long tmdbMovieId) throws MovieServiceException;

    void removeMovieByTmdbMovieId(Long tmdbMovieId) throws MovieServiceException;
}
