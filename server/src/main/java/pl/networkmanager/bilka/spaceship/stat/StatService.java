package pl.networkmanager.bilka.spaceship.stat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.networkmanager.bilka.spaceship.exception.BadRequestException;

import java.util.List;

@Service
public class StatService {
    @Autowired
    StatRepository statRepository;

    public List<Stat> getTop() {
        return statRepository.getTop();
    }

    public String add(Stat stat) throws BadRequestException {
        int result = statRepository.save(stat);
        if (result == 0){
            throw new BadRequestException("Check data provider");
        }
        return "Stat added";
    }

    public List<Stat> getUserStats(String userId) {
        return statRepository.getUserStatsByUserId(userId);
    }
}
