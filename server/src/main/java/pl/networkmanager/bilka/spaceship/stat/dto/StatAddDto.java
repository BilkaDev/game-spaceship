package pl.networkmanager.bilka.spaceship.stat.dto;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StatAddDto {
    @Size(max = 36)
    @NotEmpty
    private String userId;
    @NotEmpty
    private Long score;
    }
