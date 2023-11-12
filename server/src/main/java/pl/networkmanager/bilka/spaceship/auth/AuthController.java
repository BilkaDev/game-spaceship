package pl.networkmanager.bilka.spaceship.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @PostMapping("/signup")
    public ResponseEntity<String> register(){
        // get user .check user email if email is exist throw error "A user with that email already exists"

        // hashed password.

        // save user in db

        return ResponseEntity.ok().body("User created");
    }

    @PostMapping("/signin")
    public ResponseEntity<String> login(){
        // authenticate user password email

        // create access token

        return ResponseEntity.ok().body("access_token");
    }
}
