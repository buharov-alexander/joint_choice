package ru.bukharov.jointchoice.joint_choice_service.tmdb.service;

import ru.bukharov.jointchoice.joint_choice_service.domain.movie.Movie;
import ru.bukharov.jointchoice.joint_choice_service.tmdb.dto.TmdbMovieDTO;

public interface TmdbService {

    TmdbMovieDTO getTmdbMovie(Long tmdbMovieId) throws Exception;

    Movie saveTmdbMovie(Long tmdbMovieId) throws Exception;
}
