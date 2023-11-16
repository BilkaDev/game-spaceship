package pl.networkmanager.bilka.spaceship.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.networkmanager.bilka.spaceship.auth.dto.SigninDto;
import pl.networkmanager.bilka.spaceship.auth.dto.SignupDto;
import pl.networkmanager.bilka.spaceship.auth.response.AuthenticationResponse;
import pl.networkmanager.bilka.spaceship.config.JwtService;
import pl.networkmanager.bilka.spaceship.exception.NotFoundException;
import pl.networkmanager.bilka.spaceship.exception.UnauthorizedException;
import pl.networkmanager.bilka.spaceship.user.User;
import pl.networkmanager.bilka.spaceship.user.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(SignupDto payload) throws NotFoundException {
        var checkUser = userRepository.findByEmail(payload.getEmail());
        if (checkUser.isPresent()) {
            throw new NotFoundException("A user with that email already exists");
        }
        var user = User.builder()
                .username(payload.getUsername())
                .email(payload.getEmail())
                .password(passwordEncoder.encode(payload.getPassword())).build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .build();
    }


    public AuthenticationResponse authenticate(SigninDto payload) throws UnauthorizedException {
        try {

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            payload.getEmail(), payload.getPassword()
                    )
            );
            var user = userRepository.findByEmail(payload.getEmail()).orElseThrow();
            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse
                    .builder()
                    .token(jwtToken)
                    .build();
        } catch (Exception e) {
            throw new UnauthorizedException("Invalid email or password");
        }
    }
}
