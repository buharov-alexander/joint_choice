package ru.bukharov.jointchoice.server.moves.dto;

import org.springframework.stereotype.Component;
import ru.bukharov.jointchoice.server.core.dto.DtoAssembler;
import ru.bukharov.jointchoice.server.moves.domain.Movie;

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
        dto.setPosterPath(movie.getPosterPath());

        return dto;
    }
}
