package pl.networkmanager.bilka.spaceship.stat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatService {
    @Autowired
    StatRepository statRepository;

    public List<Stat> getTop() {
        return statRepository.getTop();
    }

    public int add(Stat stat) {
        return statRepository.save(stat);
    }

}
