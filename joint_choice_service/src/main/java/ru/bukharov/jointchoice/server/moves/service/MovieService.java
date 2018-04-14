package ru.bukharov.jointchoice.server.moves.service;

import ru.bukharov.jointchoice.server.moves.domain.Movie;
import ru.bukharov.jointchoice.server.moves.exception.MovieServiceException;

import java.util.List;

public interface MovieService {

    Movie getMovie(Long id) throws MovieServiceException;

    List<Movie> getMovies();

    Movie save(Movie movie);
}
