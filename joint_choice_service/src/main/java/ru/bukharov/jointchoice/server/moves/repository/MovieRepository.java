package ru.bukharov.jointchoice.server.moves.repository;

import org.springframework.data.repository.CrudRepository;
import ru.bukharov.jointchoice.server.moves.domain.Movie;

import java.util.Optional;

public interface MovieRepository extends CrudRepository<Movie, Long> {
    Optional<Movie> findByTmdbId(Long tmdbMovieId);
}
