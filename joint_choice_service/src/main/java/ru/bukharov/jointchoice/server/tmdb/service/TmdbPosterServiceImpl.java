package ru.bukharov.jointchoice.server.tmdb.service;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.jointchoice.server.core.service.PosterService;
import ru.bukharov.jointchoice.server.core.service.PosterType;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

@Service
class TmdbPosterServiceImpl implements TmdbPosterService {

    private static final String TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p";
    private static final String TMDB_SMALL_SIZE = "/w92";
    private static final String TMDB_MIDDLE_SIZE = "/w342";
    private static final String TMDB_SMALL_POSTER_URL = TMDB_IMAGE_SERVICE_URL + TMDB_SMALL_SIZE;
    private static final String TMDB_MIDDLE_POSTER_URL = TMDB_IMAGE_SERVICE_URL + TMDB_MIDDLE_SIZE;

    private Logger log = LoggerFactory.getLogger(TmdbPosterServiceImpl.class);

    @Autowired
    private PosterService posterService;

    @Override
    public byte[] loadAndSavePoster(String posterPath, PosterType posterType) {
        byte[] arr = loadPoster(posterPath, posterType);
        posterService.savePoster(arr, posterPath, posterType);
        return arr;
    }

    @Override
    public byte[] loadPoster(String posterPath, PosterType posterType) {
        byte[] arr = posterService.findInCache(posterPath, posterType);
        if (arr != null) {
            return arr;
        }

        try {
            URL url = getUrl(posterPath, posterType);
            arr = IOUtils.toByteArray(url);
        } catch (IOException e) {
            String msg = String.format("Cannot create URL: %s", e.getMessage());
            log.error(msg, e);
            return new byte[0];
        }

        posterService.saveInCache(arr, posterPath, posterType);
        return arr;
    }

    private URL getUrl(String posterPath, PosterType posterType) throws MalformedURLException {
        String url = PosterType.SMALL.equals(posterType) ? TMDB_SMALL_POSTER_URL : TMDB_MIDDLE_POSTER_URL;
        return new URL(url + posterPath);
    }


}
