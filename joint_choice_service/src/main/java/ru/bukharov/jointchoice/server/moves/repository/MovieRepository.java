package ru.bukharov.jointchoice.server.moves.repository;

import org.springframework.data.repository.CrudRepository;
import ru.bukharov.jointchoice.server.moves.domain.Movie;

public interface MovieRepository extends CrudRepository<Movie, Long> {
}
