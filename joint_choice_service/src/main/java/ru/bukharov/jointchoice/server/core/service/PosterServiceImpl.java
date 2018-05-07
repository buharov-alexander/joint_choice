package ru.bukharov.jointchoice.server.core.service;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

@Service
class PosterServiceImpl implements PosterService {

    @Value("${movie.poster.path}")
    private String moviePosterPath;
    @Value("${movie.poster.cache.path}")
    private String moviePosterCachePath;

    private Logger log = LoggerFactory.getLogger(PosterServiceImpl.class);
    private boolean usePosterCache;

    public PosterServiceImpl(@Value("${use.poster.cache}") String usePosterCacheProperty) {
        this.usePosterCache = Boolean.parseBoolean(usePosterCacheProperty);
    }

    @Override
    public byte[] findInCache(String posterPath, PosterType posterType) {
        if (usePosterCache) {
            File file = new File(moviePosterCachePath + posterType.getValue() + posterPath);

            if (file.exists()) {
                try {
                    return FileUtils.readFileToByteArray(file);
                } catch (IOException e) {
                    String mes = String.format("Cannot read file %s: %s", posterPath, e.getMessage());
                    log.error(mes, e);
                }
            }
        }
        return null;
    }

    @Override
    public void saveInCache(byte[] arr, String posterPath, PosterType posterType) {
        if (usePosterCache) {
            saveImage(arr, moviePosterCachePath + posterType.getValue() + posterPath);
        }
    }

    @Override
    public byte[] findPoster(String posterPath, PosterType posterType) {
        File file = new File(moviePosterPath + posterType.getValue() + posterPath);
        if (file.exists()) {
            try {
                return FileUtils.readFileToByteArray(file);
            } catch (IOException e) {
                String mes = String.format("Cannot find poster %s: %s", posterPath, e.getMessage());
                log.error(mes, e);
            }
        }
        log.warn(String.format("Poster %s is not found", posterPath));
        return new byte[0];
    }

    @Override
    public void savePoster(byte[] arr, String posterPath, PosterType posterType) {
        saveImage(arr, moviePosterPath + posterType.getValue() + posterPath);
    }

    private void saveImage(byte[] arr, String fullPath) {
        try {
            File file = new File(fullPath);
            FileUtils.writeByteArrayToFile(file, arr);
        } catch (IOException e) {
            String mes = String.format("Cannot write poster to file %s: %s", fullPath, e.getMessage());
            log.error(mes, e);
        }
    }
}
