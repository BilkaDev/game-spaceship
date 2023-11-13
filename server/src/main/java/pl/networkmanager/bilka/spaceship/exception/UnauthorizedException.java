package pl.networkmanager.bilka.spaceship.exception;

import org.springframework.http.HttpStatus;

public class UnauthorizedException extends CustomError {
    @Override
    public HttpStatus getStatusCode() {
        return HttpStatus.UNAUTHORIZED;
    }

    public UnauthorizedException() {
        super("Unauthorized");
    }

    public UnauthorizedException(String message) {
        super(message);
    }

    public UnauthorizedException(String message, Throwable cause) {
        super(message, cause);
    }
}