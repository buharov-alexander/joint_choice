package ru.bukharov.jointchoice.joint_choice_service.service.movie;

import ru.bukharov.jointchoice.joint_choice_service.domain.movie.Movie;

import java.util.List;

public interface MovieService {

    Movie getMovie(Long id) throws Exception;

    List<Movie> getMovies();
}
