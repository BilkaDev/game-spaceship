package pl.networkmanager.bilka.spaceship.auth.dto;

import jakarta.validation.constraints.Size;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Data
public class AuthDto {
    @Size(max = 100, min = 2)
    @Email
    @NotEmpty
    private String email;
    @Size(min = 6, max=100)
    @NotEmpty
    private String password;
}