package pl.networkmanager.bilka.spaceship.stat.dto;
import jakarta.validation.constraints.Size;
import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class StatAddDto {
    @Size(max = 36)
    @NotEmpty
    private String userId;
    @NotEmpty
    private Long score;
    }
