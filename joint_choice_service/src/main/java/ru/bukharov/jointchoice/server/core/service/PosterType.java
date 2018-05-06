package ru.bukharov.jointchoice.server.core.service;

public enum PosterType {
    SMALL("small"),
    MIDDLE("middle");

    private String value;

    PosterType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
