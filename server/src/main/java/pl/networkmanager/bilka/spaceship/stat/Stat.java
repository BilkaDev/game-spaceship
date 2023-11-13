package pl.networkmanager.bilka.spaceship.stat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Stat {

    private String id;
    private Long score;
    @JsonIgnore
    private String user_id;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String username;
}
