package pl.networkmanager.bilka.spaceship.stat.response;

import lombok.Data;

import java.io.Serializable;

@Data
public class ResponseMessage implements Serializable {
    private String message;

    public ResponseMessage(String message) {
        this.message = message;
    }
}
