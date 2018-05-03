package ru.bukharov.jointchoice.server.tmdb.service;

import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;

@Service
class TmdbPosterServiceImpl implements TmdbPosterService {

    private static final String TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p";
    private static final String TMDB_SMALL_SIZE = "/w92";
    private static final String TMDB_MIDDLE_SIZE = "/w342";
    private static final String TMDB_SMALL_POSTER_URL = TMDB_IMAGE_SERVICE_URL + TMDB_MIDDLE_SIZE;

    @Override
    public byte[] loadPoster(String posterPath) {
        byte[] res = new byte[0];

        try {
            URL url = new URL(TMDB_SMALL_POSTER_URL + posterPath);
            try (InputStream is = url.openStream();
                 ByteArrayOutputStream out = new ByteArrayOutputStream()) {

                byte[] b = new byte[2048];
                int length;

                while ((length = is.read(b)) != -1) {
                    out.write(b, 0, length);
                }

                res = out.toByteArray();
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        return res;
    }
}
