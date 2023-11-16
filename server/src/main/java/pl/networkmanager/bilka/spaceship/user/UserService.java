package pl.networkmanager.bilka.spaceship.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.networkmanager.bilka.spaceship.exception.NotFoundException;
import pl.networkmanager.bilka.spaceship.user.response.CurrentUserResponse;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public CurrentUserResponse getCurrentUser(String email) throws NotFoundException {
        try {

            var user = userRepository.findByEmail(email).orElseThrow();
            return CurrentUserResponse
                    .builder()
                    .userId(user.getId())
                    .username(user.getTrueUsername())
                    .email(user.getEmail())
                    .build();
        } catch (Exception e) {
            throw new NotFoundException("Not found user.");
        }
    }
}
