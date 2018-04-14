package ru.bukharov.jointchoice.server.moves.exception;

public class MovieServiceException extends Exception {

    public MovieServiceException(Exception e) {
        super(e);
    }

    public MovieServiceException(String message) {
        super(message);
    }
}
