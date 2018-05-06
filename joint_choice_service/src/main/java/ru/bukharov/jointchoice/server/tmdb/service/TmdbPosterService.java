package ru.bukharov.jointchoice.server.tmdb.service;

import ru.bukharov.jointchoice.server.core.service.PosterType;

interface TmdbPosterService {

    byte[] loadAndSavePoster(String posterPath, PosterType posterType);

    byte[] loadPoster(String posterPath, PosterType posterType);
}
