package ru.bukharov.jointchoice.joint_choice_service.tmdb.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TmdbMovieDTO {

    private Long id;
    private String title;
    private String originalTitle;
    private String description;
}
