package ru.bukharov.jointchoice.server.moves.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.jointchoice.server.core.service.PosterService;
import ru.bukharov.jointchoice.server.core.service.PosterType;
import ru.bukharov.jointchoice.server.moves.domain.Movie;
import ru.bukharov.jointchoice.server.moves.exception.MovieServiceException;
import ru.bukharov.jointchoice.server.moves.repository.MovieRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private PosterService posterService;

    private Logger log = LoggerFactory.getLogger(MovieServiceImpl.class);

    @Override
    public Movie getMovie(Long id) throws MovieServiceException {
        validateId(id);

        Optional<Movie> movie = movieRepository.findById(id);
        if (!movie.isPresent()) {
            String mes = String.format("Cannot find a movie with id %s", id);
            log.warn(mes);
            throw new MovieServiceException(mes);
        }
        return movie.get();
    }

    @Override
    public List<Movie> getMovies() {
        Iterable<Movie> iterable = movieRepository.findAll();
        List movies = new ArrayList<>();
        iterable.forEach(movies::add);
        return movies;
    }

    @Override
    public Movie save(Movie movie) {
        //TODO: add validation

        return movieRepository.save(movie);
    }

    @Override
    public byte[] getMoviePoster(Long id, PosterType posterType) throws MovieServiceException {
        Movie movie = getMovie(id);
        String posterPath = movie.getPosterPath();

        return posterService.findPoster(posterPath, posterType);
    }

    private void validateId(Long id) {
        if (id == null || id < 0) {
            String mes = String.format("Movie ID %d is not a positive integer", id);
            log.warn(mes);
            throw new IllegalArgumentException(mes);
        }
    }
}
