package ru.bukharov.jointchoice.server.moves.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.jointchoice.server.core.service.PosterType;
import ru.bukharov.jointchoice.server.moves.domain.Movie;
import ru.bukharov.jointchoice.server.moves.dto.MovieDTO;
import ru.bukharov.jointchoice.server.moves.dto.MovieDtoAssembler;
import ru.bukharov.jointchoice.server.moves.exception.MovieServiceException;
import ru.bukharov.jointchoice.server.tmdb.dto.TmdbMovieDTO;
import ru.bukharov.jointchoice.server.tmdb.service.TmdbService;

@Service
class MovieDetailsServiceImpl implements MovieDetailsService {
    @Autowired
    private MovieService movieService;
    @Autowired
    private TmdbService tmdbService;
    @Autowired
    private MovieDtoAssembler assembler;

    @Override
    public MovieDTO getMovieByTmdbMovieId(Long tmdbMovieId) throws Exception {
        try {
            Movie movie = movieService.getMovieByTmdbMovieId(tmdbMovieId);
            return assembler.convertToDto(movie);
        } catch (MovieServiceException e) {
            TmdbMovieDTO tmdbMovie = tmdbService.getTmdbMovie(tmdbMovieId);
            return convertTmdbMovieDtoToMovieDTO(tmdbMovie);
        }
    }

    @Override
    public byte[] getMoviePoster(Long tmdbMovieId, PosterType posterType) throws Exception {
        try {
            return movieService.getMoviePoster(tmdbMovieId, posterType);
        } catch (MovieServiceException e) {
            return tmdbService.getMoviePoster(tmdbMovieId, posterType);
        }
    }

    private MovieDTO convertTmdbMovieDtoToMovieDTO(TmdbMovieDTO tmdbMovieDTO) {
        MovieDTO movieDTO = new MovieDTO();
        movieDTO.setTmdbId(tmdbMovieDTO.getTmdbId());
        movieDTO.setTitle(tmdbMovieDTO.getTitle());
        movieDTO.setOriginalTitle(tmdbMovieDTO.getOriginalTitle());
        movieDTO.setDescription(tmdbMovieDTO.getDescription());
        movieDTO.setPosterPath(tmdbMovieDTO.getPosterPath());

        return movieDTO;
    }
}
