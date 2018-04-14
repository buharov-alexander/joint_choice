package ru.bukharov.jointchoice.server.core.service;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import ru.bukharov.jointchoice.server.core.exception.RequestServiceException;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.nio.charset.Charset;

@Service
public class RequestService {

    private Logger log = LoggerFactory.getLogger(RequestService.class);

    public JSONObject getJsonFromUrl(String url) throws RequestServiceException {
        assert url != null;

        try (InputStream is = new URL(url).openStream()) {
            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
            String jsonText = readString(rd);
            return new JSONObject(jsonText);
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            throw new RequestServiceException(e);
        }
    }

    private String readString(Reader rd) throws IOException {
        StringBuilder sb = new StringBuilder();
        int cp;
        while ((cp = rd.read()) != -1) {
            sb.append((char) cp);
        }
        return sb.toString();
    }
}
