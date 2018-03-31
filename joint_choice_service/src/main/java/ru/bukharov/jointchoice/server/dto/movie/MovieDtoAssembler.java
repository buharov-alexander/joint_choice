package ru.bukharov.jointchoice.server.dto.movie;

import org.springframework.stereotype.Component;
import ru.bukharov.jointchoice.server.domain.movie.Movie;
import ru.bukharov.jointchoice.server.dto.DtoAssembler;

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
