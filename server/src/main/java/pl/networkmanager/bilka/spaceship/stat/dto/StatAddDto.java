package pl.networkmanager.bilka.spaceship.stat.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;



@Data
public class StatAddDto {
    @NotNull
    private Long score;
    }
