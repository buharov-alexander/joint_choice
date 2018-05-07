import { SERVER_URL } from './server';

export const findMovies = text => fetch(`${SERVER_URL}/jointchoice/tmdb/search/movie?query=${text}`);

export const getSmallPosterUrl = tmdbMovieId => `${SERVER_URL}/jointchoice/tmdb/movie/poster/SMALL/${tmdbMovieId}`;

export const getMiddlePosterUrl = tmdbMovieId => `${SERVER_URL}/jointchoice/tmdb/movie/poster/MIDDLE/${tmdbMovieId}`;
