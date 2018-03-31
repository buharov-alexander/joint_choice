package ru.bukharov.jointchoice.server.repository.movie;

import org.springframework.data.repository.CrudRepository;
import ru.bukharov.jointchoice.server.domain.movie.Movie;

public interface MovieRepository extends CrudRepository<Movie, Long> {
}
