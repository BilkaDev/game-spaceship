package pl.networkmanager.bilka.spaceship.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.networkmanager.bilka.spaceship.auth.dto.SigninDto;
import pl.networkmanager.bilka.spaceship.auth.dto.SignupDto;
import pl.networkmanager.bilka.spaceship.exception.NotFoundException;
import pl.networkmanager.bilka.spaceship.security.Password;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public String createUser(SignupDto payload) throws Exception {
        // get user .check user email if email is exist throw error "A user with that email already exists"
        User checkUser = userRepository.getByEmail(payload.getEmail());
        if (checkUser != null){
            throw new NotFoundException("A user with that email already exists");
        }
        // hashed password.
        String hashPwd = Password.getHashPwd(payload.getPassword());

        User user = new User();
        user.setUsername(payload.getUsername());
        user.setEmail(payload.getEmail());
        user.setHashPwd(hashPwd);

        // save user in db
        userRepository.save(user);
        return "User created!";
    }


    public String login(SigninDto payload){
        User user = userRepository.getByEmail(payload.getEmail());

        // hashed password.

        // save user in db
        return "accessToken:!";
    }
}
