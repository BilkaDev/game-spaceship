package pl.networkmanager.bilka.spaceship.stat;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.networkmanager.bilka.spaceship.exception.NotFoundException;
import pl.networkmanager.bilka.spaceship.stat.dto.StatAddDto;
import pl.networkmanager.bilka.spaceship.stat.response.ResponseMessage;
import pl.networkmanager.bilka.spaceship.user.UserService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StatService {
    private final StatRepository statRepository;
    private final UserService userService;

    public List<Stat> getTop() {
        return statRepository.findTop100ByOrderByScoreDesc();
    }

    public ResponseMessage add(StatAddDto payload, String email) throws NotFoundException {
        var user = userService.getCurrentUser(email);
        var stat = Stat.builder()
                .score(payload.getScore())
                .user(user)
                .build();

        statRepository.save(stat);
        return ResponseMessage.builder().message("Stat added").build();
    }

    public List<Stat> getUserStats(String email) {
        return statRepository.findTop100ByUserEmailOrderByScoreDesc(email);
    }
}
