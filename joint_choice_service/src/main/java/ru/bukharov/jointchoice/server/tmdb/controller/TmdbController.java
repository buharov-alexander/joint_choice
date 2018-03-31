package ru.bukharov.jointchoice.server.tmdb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.bukharov.jointchoice.server.domain.movie.Movie;
import ru.bukharov.jointchoice.server.dto.movie.MovieDTO;
import ru.bukharov.jointchoice.server.dto.movie.MovieDtoAssembler;
import ru.bukharov.jointchoice.server.tmdb.dto.TmdbMovieDTO;
import ru.bukharov.jointchoice.server.tmdb.service.TmdbService;

@Controller
@RequestMapping("/jointchoice/tmdb")
public class TmdbController {

    @Autowired
    private TmdbService tmdbService;
    @Autowired
    private MovieDtoAssembler assembler;

    @RequestMapping(value = "/movie/{tmdbMovieId}", method = RequestMethod.GET)
    public
    @ResponseBody
    TmdbMovieDTO getTmdbMovie(@PathVariable Long tmdbMovieId) throws Exception {
        return tmdbService.getTmdbMovie(tmdbMovieId);
    }

    @RequestMapping(value = "/movie", method = RequestMethod.POST)
    public
    @ResponseBody
    MovieDTO saveTmdbMovie(@RequestParam("tmdbMovieId") Long tmdbMovieId) throws Exception {
        Movie movie = tmdbService.saveTmdbMovie(tmdbMovieId);
        return assembler.convertToDto(movie);
    }
}
