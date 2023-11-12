package pl.networkmanager.bilka.spaceship.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.networkmanager.bilka.spaceship.auth.dto.AuthDto;
import pl.networkmanager.bilka.spaceship.user.UserService;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    UserService userService;
    @PostMapping("/signup")
    public String register(@Valid @RequestBody AuthDto user) throws Exception {
        return userService.createUser(user.getEmail(), user.getPassword());
    }

    @PostMapping("/signin")
    public String login(@Valid @RequestBody AuthDto user){
        return userService.login(user.getEmail(), user.getPassword());
    }
}
