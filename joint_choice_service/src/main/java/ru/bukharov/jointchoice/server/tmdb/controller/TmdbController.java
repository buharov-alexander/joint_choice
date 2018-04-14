package ru.bukharov.jointchoice.server.tmdb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
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

    @RequestMapping(value = "/movie", method = RequestMethod.POST)
    public MovieDTO saveTmdbMovie(@RequestParam("tmdbMovieId") Long tmdbMovieId) throws Exception {
        Movie movie = tmdbService.saveTmdbMovie(tmdbMovieId);
        return assembler.convertToDto(movie);
    }

    @RequestMapping(value = "/search/movie", method = RequestMethod.GET)
    public List<TmdbMovieDTO> searchTmdbMovies(@RequestParam("query") String query) throws Exception {
        return tmdbService.searchTmdbMovies(query);
    }

}
