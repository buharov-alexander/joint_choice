package ru.bukharov.jointchoice.joint_choice_service.controller.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.bukharov.jointchoice.joint_choice_service.domain.movie.Movie;
import ru.bukharov.jointchoice.joint_choice_service.dto.movie.MovieDTO;
import ru.bukharov.jointchoice.joint_choice_service.dto.movie.MovieDtoAssembler;
import ru.bukharov.jointchoice.joint_choice_service.service.movie.MovieService;

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

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    List<MovieDTO> getMovies() throws Exception {
        List<Movie> movies = movieService.getMovies();
        return assembler.convertToDtoList(movies);
    }

}
