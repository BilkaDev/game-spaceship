package pl.networkmanager.bilka.spaceship.health;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.networkmanager.bilka.spaceship.auth.AuthService;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class HealthController {
    private final AuthService service;

    @GetMapping("/health")
    public ResponseEntity<?> health() {

        return ResponseEntity.ok(null);
    }

}
