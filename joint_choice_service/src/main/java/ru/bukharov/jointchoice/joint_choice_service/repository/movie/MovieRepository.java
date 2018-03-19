package ru.bukharov.jointchoice.joint_choice_service.repository.movie;

import org.springframework.data.repository.CrudRepository;
import ru.bukharov.jointchoice.joint_choice_service.domain.movie.Movie;

public interface MovieRepository extends CrudRepository<Movie, Long> {
}
