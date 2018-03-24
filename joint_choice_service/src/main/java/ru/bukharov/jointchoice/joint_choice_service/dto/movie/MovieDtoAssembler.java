package ru.bukharov.jointchoice.joint_choice_service.dto.movie;

import org.springframework.stereotype.Component;
import ru.bukharov.jointchoice.joint_choice_service.domain.movie.Movie;
import ru.bukharov.jointchoice.joint_choice_service.dto.DtoAssembler;

@Component
public class MovieDtoAssembler extends DtoAssembler<Movie, MovieDTO> {

    @Override
    public MovieDTO convertToDto(Movie movie) {
        MovieDTO dto = new MovieDTO();
        dto.setId(movie.getId());
        dto.setTmdbId(movie.getTmdbId());
        dto.setTitle(movie.getTitle());
        dto.setOriginalTitle(movie.getOriginalTitle());
        dto.setDescription(movie.getDescription());

        return dto;
    }
}
