import { SERVER_URL } from './server';

export const fetchMovies = () => fetch(`${SERVER_URL}/jointchoice/movie`);

export const fetchMovie = movieId => fetch(`${SERVER_URL}/jointchoice/movie/${movieId}`);

export const fetchMovieByTmdbMovieId = tmdbMovieId => fetch(`${SERVER_URL}/jointchoice/movie/tmdb?tmdbMovieId=${tmdbMovieId}`);

export const getSmallPosterUrl = tmdbMovieId => `${SERVER_URL}/jointchoice/movie/poster/SMALL/${tmdbMovieId}`;

export const getMiddlePosterUrl = tmdbMovieId => `${SERVER_URL}/jointchoice/movie/poster/MIDDLE/${tmdbMovieId}`;
