import { SERVER_URL } from './server';

export const searchMoviesRequest = text => fetch(`${SERVER_URL}/jointchoice/tmdb/search/movie?query=${text}`);

export const saveTmdbMovieRequest = tmdbMovieId => fetch(
  `${SERVER_URL}/jointchoice/movie/tmdb?tmdbMovieId=${tmdbMovieId}`,
  { method: 'post' },
);

export const deleteTmdbMovieRequest = tmdbMovieId => fetch(
  `${SERVER_URL}/jointchoice/movie/tmdb?tmdbMovieId=${tmdbMovieId}`,
  { method: 'delete' },
);

export const fetchTmdbMovie = tmdbMovieId => fetch(`${SERVER_URL}/jointchoice/tmdb/movie/${tmdbMovieId}`);

export const getSmallPosterUrl = tmdbMovieId => `${SERVER_URL}/jointchoice/tmdb/movie/poster/SMALL/${tmdbMovieId}`;

export const getMiddlePosterUrl = tmdbMovieId => `${SERVER_URL}/jointchoice/tmdb/movie/poster/MIDDLE/${tmdbMovieId}`;
