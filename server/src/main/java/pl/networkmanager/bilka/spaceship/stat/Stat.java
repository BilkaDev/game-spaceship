package pl.networkmanager.bilka.spaceship.stat;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.networkmanager.bilka.spaceship.user.User;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "stat")
public class Stat {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private Long score;
    @ManyToOne()
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
