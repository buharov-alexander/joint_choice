package ru.bukharov.jointchoice.joint_choice_service.tmdb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.bukharov.jointchoice.joint_choice_service.tmdb.dto.TmdbMovieDTO;
import ru.bukharov.jointchoice.joint_choice_service.tmdb.service.TmdbService;

@Controller
@RequestMapping("/jointchoice/tmdb")
public class TmdbController {

    @Autowired
    private TmdbService tmdbService;

    @RequestMapping(value = "/movie/{id}", method = RequestMethod.GET)
    public
    @ResponseBody
    TmdbMovieDTO getMovie(@PathVariable Long id) {
        try {
            return tmdbService.getTmdbMovie(id);
        } catch (Exception e) {
            return null;
        }
    }
}
