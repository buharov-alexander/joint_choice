package ru.bukharov.jointchoice.server.core.service;

public interface PosterService {
    byte[] findInCache(String posterPath, PosterType posterType);

    byte[] findPoster(String posterPath, PosterType posterType);

    void saveInCache(byte[] arr, String posterPath, PosterType posterType);

    void savePoster(byte[] arr, String posterPath, PosterType posterType);

    void deletePoster(String posterPath);
}
