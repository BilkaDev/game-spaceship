package pl.networkmanager.bilka.spaceship.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NotFoundException extends CustomError {
    @Override
    public HttpStatus getStatusCode() {
        return HttpStatus.NOT_FOUND;
    }

    public NotFoundException(String message) {
        super(message);
    }
    public NotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}