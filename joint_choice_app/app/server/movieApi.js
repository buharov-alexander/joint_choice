import { SERVER_URL } from './server';

export const fetchMovies = () => fetch(`${SERVER_URL}/jointchoice/movie`);

export const fetchMovie = movieId => fetch(`${SERVER_URL}/jointchoice/movie/${movieId}`);

export const getSmallPosterUrl = movieId => `${SERVER_URL}/jointchoice/movie/poster/SMALL/${movieId}`;

export const getMiddlePosterUrl = movieId => `${SERVER_URL}/jointchoice/movie/poster/MIDDLE/${movieId}`;
