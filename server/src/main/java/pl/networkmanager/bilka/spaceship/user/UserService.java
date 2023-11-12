package pl.networkmanager.bilka.spaceship.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.networkmanager.bilka.spaceship.exception.NotFoundException;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public String createUser(String email, String password) throws Exception {
        // get user .check user email if email is exist throw error "A user with that email already exists"
        User user = userRepository.getByEmail(email);
        if (user != null){
            throw new NotFoundException("A user with that email already exists");
        }

        // hashed password.

        // save user in db
        return "User created!";
    }


    public String login(String email, String password){
        User user = userRepository.getByEmail(email);

        // hashed password.

        // save user in db
        return "accessToken:!";
    }
}
