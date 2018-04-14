package ru.bukharov.jointchoice.server.moves.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long tmdbId;
    private String title;
    private String originalTitle;
    private String description;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "poster_id")
    private MoviePoster poster;
}
