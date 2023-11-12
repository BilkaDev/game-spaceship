package pl.networkmanager.bilka.spaceship.auth;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.networkmanager.bilka.spaceship.response.ResponseMessage;
import pl.networkmanager.bilka.spaceship.auth.dto.SigninDto;
import pl.networkmanager.bilka.spaceship.auth.dto.SignupDto;
import pl.networkmanager.bilka.spaceship.user.UserService;


@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    UserService userService;

    @PostMapping("/signup")
    public ResponseMessage register(@Valid @RequestBody SignupDto user) throws Exception {

        return new ResponseMessage(userService.createUser(user));
    }

    @PostMapping("/signin")
    public ResponseMessage login(@Valid @RequestBody SigninDto user) {
        return new ResponseMessage(userService.login(user));
    }
}
