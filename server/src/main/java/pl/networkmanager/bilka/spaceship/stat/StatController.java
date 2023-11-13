package pl.networkmanager.bilka.spaceship.stat;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.networkmanager.bilka.spaceship.exception.BadRequestException;
import pl.networkmanager.bilka.spaceship.response.ResponseMessage;
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

    @GetMapping("/{userId}")
    public List<Stat> getTop(@PathVariable("userId")String userId) {

        return statService.getUserStats(userId);
    }

    @PostMapping("")
    public ResponseMessage addStat(@Valid @RequestBody StatAddDto statDto) throws BadRequestException {
        Stat stat = new Stat();
        stat.setScore(statDto.getScore());
        stat.setUser_id(statDto.getUserId());
        return new ResponseMessage(statService.add(stat));}
}
