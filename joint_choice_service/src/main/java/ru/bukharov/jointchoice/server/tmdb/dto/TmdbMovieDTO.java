package ru.bukharov.jointchoice.server.tmdb.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TmdbMovieDTO {

    private Long tmdbId;
    private String title;
    private String originalTitle;
    private String description;
    private String posterPath;
}
