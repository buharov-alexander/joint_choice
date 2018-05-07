package ru.bukharov.jointchoice.server.tmdb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import ru.bukharov.jointchoice.server.core.service.PosterType;
import ru.bukharov.jointchoice.server.moves.domain.Movie;
import ru.bukharov.jointchoice.server.moves.dto.MovieDTO;
import ru.bukharov.jointchoice.server.moves.dto.MovieDtoAssembler;
import ru.bukharov.jointchoice.server.tmdb.dto.TmdbMovieDTO;
import ru.bukharov.jointchoice.server.tmdb.service.TmdbService;

import java.util.List;

@RestController
@RequestMapping("/jointchoice/tmdb")
public class TmdbController {

    @Autowired
    private TmdbService tmdbService;
    @Autowired
    private MovieDtoAssembler assembler;

    @RequestMapping(value = "/movie/{tmdbMovieId}", method = RequestMethod.GET)
    public TmdbMovieDTO getTmdbMovie(@PathVariable Long tmdbMovieId) throws Exception {
        return tmdbService.getTmdbMovie(tmdbMovieId);
    }

    @RequestMapping(value = "/search/movie", method = RequestMethod.GET)
    public List<TmdbMovieDTO> searchTmdbMovies(@RequestParam("query") String query) throws Exception {
        return tmdbService.searchTmdbMovies(query);
    }

    @RequestMapping(value = "/movie/poster/{posterType}/{tmdbMovieId}",
            method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public
    @ResponseBody
    byte[] getMoviePoster(@PathVariable PosterType posterType, @PathVariable Long tmdbMovieId) throws Exception {
        return tmdbService.getMoviePoster(tmdbMovieId, posterType);
    }

}
