package ru.bukharov.jointchoice.server.tmdb.service;

interface TmdbPosterService {

    byte[] loadPoster(String posterPath, boolean saveToCache);
}
