package pl.networkmanager.bilka.spaceship.stat.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;



@Data
public class StatAddDto {
    @NotEmpty
    @Size(max = 36)
    private String userId;
    @NotNull
    private Long score;
    }
