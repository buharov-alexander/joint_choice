package ru.bukharov.jointchoice.server.dto.movie;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieDTO {

    private Long id;
    private Long tmdbId;
    private String title;
    private String originalTitle;
    private String description;
}
