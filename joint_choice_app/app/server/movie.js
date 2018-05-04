import { SERVER_URL } from './server';

export const fetchMovies = () => fetch(`${SERVER_URL}/jointchoice/movie`);

export const fetchMovie = movieId => fetch(`${SERVER_URL}/jointchoice/movie/${movieId}`);

export const getPosterUrl = movieId => `${SERVER_URL}/jointchoice/movie/poster/${movieId}`;

export const findMovies = text => fetch(`${SERVER_URL}/jointchoice/tmdb/search/movie?query=${text}`);
