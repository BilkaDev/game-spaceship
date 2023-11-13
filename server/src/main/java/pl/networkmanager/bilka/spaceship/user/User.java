package pl.networkmanager.bilka.spaceship.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
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
    @JsonIgnore
    private String hashPwd;
    private String email;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<Stat> stats;
}