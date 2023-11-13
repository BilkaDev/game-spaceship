package pl.networkmanager.bilka.spaceship.exception;

import org.springframework.http.HttpStatus;

public class BadRequestException extends CustomError {
    @Override
    public HttpStatus getStatusCode() {
        return HttpStatus.BAD_REQUEST;
    }

    public BadRequestException() {
        super("Bad request");
    }
    public BadRequestException(String message) {
        super(message);
    }
    public BadRequestException(String message, Throwable cause) {
        super(message, cause);
    }
}