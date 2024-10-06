package pl.networkmanager.bilka.spaceship.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.networkmanager.bilka.spaceship.exception.NotFoundException;
import pl.networkmanager.bilka.spaceship.user.response.CurrentUserResponse;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User getCurrentUser(String id) throws NotFoundException {
        try {
            return userRepository.findById(id).orElseThrow();
        } catch (Exception e) {
            throw new NotFoundException("Not found user.");
        }
    }

    public CurrentUserResponse getProfile(String email) throws NotFoundException {

        var user = getCurrentUser(email);

        return CurrentUserResponse
                .builder()
                .userId(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .build();
    }
}
