package ru.bukharov.jointchoice.server.service.movie;

import ru.bukharov.jointchoice.server.domain.movie.Movie;

import java.util.List;

public interface MovieService {

    Movie getMovie(Long id) throws Exception;

    List<Movie> getMovies();
}
