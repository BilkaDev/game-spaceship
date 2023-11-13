package pl.networkmanager.bilka.spaceship.exception;

import org.springframework.http.HttpStatus;

public abstract class CustomError extends Exception {
    public abstract HttpStatus getStatusCode();

    public CustomError(String message) {
        super(message);
    }
    public CustomError(String message, Throwable cause) {
        super(message, cause);
    }
}