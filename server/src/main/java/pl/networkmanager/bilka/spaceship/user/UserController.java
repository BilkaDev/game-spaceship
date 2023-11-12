package pl.networkmanager.bilka.spaceship.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.networkmanager.bilka.spaceship.user.response.UserProfile;


@RestController
@RequestMapping("/users")
public class UserController {
    @GetMapping("/me")
    public UserProfile profile(){
        UserProfile user = new UserProfile();
        user.setUsername("Test");
        user.setUserId("123");
        return user;
    }
}
