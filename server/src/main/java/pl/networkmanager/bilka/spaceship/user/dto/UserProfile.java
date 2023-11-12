package pl.networkmanager.bilka.spaceship.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserProfile {
    private String username;
    private String userId;
}
