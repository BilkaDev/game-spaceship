package pl.networkmanager.bilka.spaceship.stat;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.networkmanager.bilka.spaceship.stat.dto.StatAddDto;


import java.util.List;

@RestController
@RequestMapping("/stats")
public class StatController {
    @Autowired
    StatService statService;

    @GetMapping("/top")
    public List<Stat> getTop() {
        return statService.getTop();
    }

    @PostMapping("")
    public int addStat(@Valid @RequestBody StatAddDto statDto){
        Stat stat = new Stat();
        stat.setScore(statDto.getScore());
        stat.setUser_id(statDto.getUserId());
        return statService.add(stat);}
}
