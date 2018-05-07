package ru.bukharov.jointchoice.server.moves.service;

import ru.bukharov.jointchoice.server.core.service.PosterType;
import ru.bukharov.jointchoice.server.moves.dto.MovieDTO;

public interface MovieDetailsService {
    MovieDTO getMovieByTmdbMovieId(Long tmdbMovieId) throws Exception;

    byte[] getMoviePoster(Long tmdbMovieId, PosterType posterType) throws Exception;
}
