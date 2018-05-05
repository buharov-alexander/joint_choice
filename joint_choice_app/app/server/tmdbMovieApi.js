import { SERVER_URL } from './server';

export const findMovies = text => fetch(`${SERVER_URL}/jointchoice/tmdb/search/movie?query=${text}`);

export const getPosterUrl = tmdbMovieId => `${SERVER_URL}/jointchoice/tmdb/movie/poster/${tmdbMovieId}`;
