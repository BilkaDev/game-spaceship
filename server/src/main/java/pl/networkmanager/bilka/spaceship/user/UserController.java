package pl.networkmanager.bilka.spaceship.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.networkmanager.bilka.spaceship.exception.NotFoundException;
import pl.networkmanager.bilka.spaceship.user.response.CurrentUserResponse;

import java.security.Principal;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    @GetMapping("/me")
    public ResponseEntity<CurrentUserResponse> profile(Principal principal) throws NotFoundException {
        return ResponseEntity.ok(userService.getProfile(principal.getName()));
    }
}
