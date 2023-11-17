package pl.networkmanager.bilka.spaceship.auth;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.networkmanager.bilka.spaceship.auth.dto.SigninDto;
import pl.networkmanager.bilka.spaceship.auth.dto.SignupDto;
import pl.networkmanager.bilka.spaceship.auth.response.AuthenticationResponse;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService service;

    @PostMapping("/signup")
    public ResponseEntity<AuthenticationResponse> register(@Valid @RequestBody SignupDto payload) throws Exception {

        return ResponseEntity.ok(service.register(payload));
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthenticationResponse> login(@Valid @RequestBody SigninDto payload) throws Exception {
        return ResponseEntity.ok(service.authenticate(payload));
    }
}
