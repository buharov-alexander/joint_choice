package ru.bukharov.jointchoice.server.core.service;

import org.json.JSONObject;
import ru.bukharov.jointchoice.server.core.exception.RequestServiceException;

public interface RequestService {
    JSONObject getJsonFromUrl(String url) throws RequestServiceException;
}
