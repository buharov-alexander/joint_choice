import { SERVER_URL } from './server';

export const getMovieDetails = tmdbMovieId => fetch(`${SERVER_URL}/jointchoice/movie/details?tmdbMovieId=${tmdbMovieId}`);

export const getSmallPosterUrl = tmdbMovieId => `${SERVER_URL}/jointchoice/movie/details/poster/SMALL/${tmdbMovieId}`;

export const getMiddlePosterUrl = tmdbMovieId => `${SERVER_URL}/jointchoice/movie/details/poster/MIDDLE/${tmdbMovieId}`;
