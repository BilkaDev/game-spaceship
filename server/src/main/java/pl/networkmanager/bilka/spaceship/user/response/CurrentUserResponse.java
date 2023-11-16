package pl.networkmanager.bilka.spaceship.user.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CurrentUserResponse {
    private String username;
    private String email;
    private String userId;
}
