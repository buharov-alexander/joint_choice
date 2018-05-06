package ru.bukharov.jointchoice.server.moves.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.bukharov.jointchoice.server.core.service.PosterType;
import ru.bukharov.jointchoice.server.moves.domain.Movie;
import ru.bukharov.jointchoice.server.moves.dto.MovieDTO;
import ru.bukharov.jointchoice.server.moves.dto.MovieDtoAssembler;
import ru.bukharov.jointchoice.server.moves.service.MovieService;

import java.util.List;

@Controller
@RequestMapping("/jointchoice/movie")
public class MovieController {

    @Autowired
    private MovieService movieService;
    @Autowired
    private MovieDtoAssembler assembler;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public
    @ResponseBody
    MovieDTO getMovie(@PathVariable Long id) throws Exception {
        Movie movie = movieService.getMovie(id);
        return assembler.convertToDto(movie);
    }

    @RequestMapping(value = "/poster/{posterType}/{id}",
            method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public
    @ResponseBody
    byte[] getMoviePoster(@PathVariable PosterType posterType, @PathVariable Long id) throws Exception {
        return movieService.getMoviePoster(id, posterType);
    }

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    List<MovieDTO> getMovies() throws Exception {
        List<Movie> movies = movieService.getMovies();
        return assembler.convertToDtoList(movies);
    }

}
