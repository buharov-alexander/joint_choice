package ru.bukharov.jointchoice.server.tmdb.service;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.net.URL;

@Service
class TmdbPosterServiceImpl implements TmdbPosterService {

    private static final String TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p";
    private static final String TMDB_SMALL_SIZE = "/w92";
    private static final String TMDB_MIDDLE_SIZE = "/w342";
    private static final String TMDB_SMALL_POSTER_URL = TMDB_IMAGE_SERVICE_URL + TMDB_MIDDLE_SIZE;
    private static final String PATH_TO_CACHE = "src/main/resources/images/cache";

    private Logger log = LoggerFactory.getLogger(TmdbPosterServiceImpl.class);

    private boolean usePosterCache;

    public TmdbPosterServiceImpl(@Value("${use.poster.cache}") String usePosterCacheProperty) {
        this.usePosterCache = Boolean.parseBoolean(usePosterCacheProperty);
    }

    @Override
    public byte[] loadPoster(String posterPath, boolean saveToCache) {
        try {
            byte[] res;
            if (usePosterCache) {
                res = findInCache(posterPath);
                if (res != null) {
                    return res;
                }
            }

            URL url = new URL(TMDB_SMALL_POSTER_URL + posterPath);
            res = IOUtils.toByteArray(url);
            if (saveToCache && usePosterCache) {
                savePoster(res, posterPath);
            }

            return res;
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            return new byte[0];
        }
    }

    private byte[] findInCache(String posterPath) throws IOException {
        File file = new File(PATH_TO_CACHE + posterPath);

        if (file.exists()) {
            return FileUtils.readFileToByteArray(file);
        }
        return null;
    }

    private void savePoster(byte[] arr, String posterPath) throws IOException {
        File file = new File(PATH_TO_CACHE + posterPath);
        FileUtils.writeByteArrayToFile(file, arr);
    }
}
