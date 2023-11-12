package pl.networkmanager.bilka.spaceship.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.networkmanager.bilka.spaceship.stat.Stat;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String id;
    private String username;
    private String hashPwd;
    private String email;
    private List<Stat> stats;
}