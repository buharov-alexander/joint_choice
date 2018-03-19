package ru.bukharov.jointchoice.joint_choice_service.tmdb.service;

import ru.bukharov.jointchoice.joint_choice_service.tmdb.dto.TmdbMovieDTO;

public interface TmdbService {

    TmdbMovieDTO getTmdbMovie(Long tmdbMovieId) throws Exception;
}
