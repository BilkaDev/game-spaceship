package pl.networkmanager.bilka.spaceship.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class SigninDto {
    @NotEmpty
    @Email
    @Size(max = 100, min = 2)
    private String email;
    @NotEmpty
    @Size(min = 6, max=100)
    private String password;
}