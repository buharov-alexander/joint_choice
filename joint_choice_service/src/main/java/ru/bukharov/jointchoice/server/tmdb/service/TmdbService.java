package ru.bukharov.jointchoice.server.tmdb.service;

import ru.bukharov.jointchoice.server.domain.movie.Movie;
import ru.bukharov.jointchoice.server.tmdb.dto.TmdbMovieDTO;

public interface TmdbService {

    TmdbMovieDTO getTmdbMovie(Long tmdbMovieId) throws Exception;

    Movie saveTmdbMovie(Long tmdbMovieId) throws Exception;
}
