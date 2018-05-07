package ru.bukharov.jointchoice.server.moves.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.bukharov.jointchoice.server.core.service.PosterType;
import ru.bukharov.jointchoice.server.moves.dto.MovieDTO;
import ru.bukharov.jointchoice.server.moves.service.MovieDetailsService;

@RestController
@RequestMapping("/jointchoice/movie/details")
public class MovieDetailsController {

    @Autowired
    private MovieDetailsService movieDetailsService;

    @RequestMapping(method = RequestMethod.GET)
    public MovieDTO getMovieByTmdbMovieId(@RequestParam("tmdbMovieId") Long tmdbMovieId) throws Exception {
        return movieDetailsService.getMovieByTmdbMovieId(tmdbMovieId);
    }

    @RequestMapping(value = "/poster/{posterType}/{tmdbMovieId}",
            method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getMoviePoster(@PathVariable PosterType posterType, @PathVariable Long tmdbMovieId) throws Exception {
        return movieDetailsService.getMoviePoster(tmdbMovieId, posterType);
    }
}
