package ru.bukharov.jointchoice.joint_choice_service.dto.movie;

public class MovieDTO {

    private Long id;
    private Long tmdbId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTmdbId() {
        return tmdbId;
    }

    public void setTmdbId(Long tmdbId) {
        this.tmdbId = tmdbId;
    }

}
