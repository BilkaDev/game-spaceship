package pl.networkmanager.bilka.spaceship.stat;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StatRepository extends JpaRepository<Stat, String> {
    List<Stat> findTop100ByOrderByScoreDesc();

    List<Stat> findTop100ByUserIdOrderByScoreDesc(String id);
}