package pl.networkmanager.bilka.spaceship.stat;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.networkmanager.bilka.spaceship.exception.NotFoundException;
import pl.networkmanager.bilka.spaceship.stat.response.ResponseMessage;
import pl.networkmanager.bilka.spaceship.stat.dto.StatAddDto;


import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/stats")
public class StatController {
    private final StatService statService;

    @GetMapping("/top")
    public ResponseEntity<List<Stat>> getTop() {
        return ResponseEntity.ok(statService.getTop());
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Stat>> getUserTop(@PathVariable String id) {
        return ResponseEntity.ok(statService.getUserStats(id));
    }

    @PostMapping("")
    public ResponseEntity<ResponseMessage> addStat(@Valid @RequestBody StatAddDto statDto) throws NotFoundException {
        var responseMessage = statService.add(statDto);

        return ResponseEntity.ok(responseMessage);
    }
}
