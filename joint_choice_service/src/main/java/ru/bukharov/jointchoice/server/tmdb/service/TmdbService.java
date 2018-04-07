package ru.bukharov.jointchoice.server.tmdb.service;

import ru.bukharov.jointchoice.server.domain.movie.Movie;
import ru.bukharov.jointchoice.server.tmdb.dto.TmdbMovieDTO;

import java.util.List;

public interface TmdbService {

    TmdbMovieDTO getTmdbMovie(Long tmdbMovieId) throws Exception;

    Movie saveTmdbMovie(Long tmdbMovieId) throws Exception;

    List<TmdbMovieDTO> searchTmdbMovies(String query) throws Exception;
}
