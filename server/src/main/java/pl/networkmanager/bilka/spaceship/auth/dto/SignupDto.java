package pl.networkmanager.bilka.spaceship.auth.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Email;
import lombok.Data;



@Data
public class SignupDto {
    @NotEmpty
    @Email
    @Size(max = 100, min = 2)
    private String email;
    @NotEmpty
    @Size(min = 6, max=100)
    private String password;
    @NotEmpty
    @Size(min = 2, max=100)
    private String username;
}