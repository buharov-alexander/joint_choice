import { SERVER_URL } from './server';

export const fetchMovies = () => { 
  console.log(`${SERVER_URL}/jointchoice/movie`);
  return fetch(`${SERVER_URL}/jointchoice/movie`);
}

export const getPosterUrl = movieId => `${SERVER_URL}/jointchoice/movie/poster/${movieId}`;
