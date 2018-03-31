package ru.bukharov.jointchoice.server.service.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.jointchoice.server.domain.movie.Movie;
import ru.bukharov.jointchoice.server.repository.movie.MovieRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public Movie getMovie(Long id) throws Exception {
        Optional<Movie> movie = movieRepository.findById(id);
        if (!movie.isPresent()) {
            throw new Exception(String.format("Cannot find a movie with id %s", id));
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
}
