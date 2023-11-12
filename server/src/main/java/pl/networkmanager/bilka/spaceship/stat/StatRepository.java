package pl.networkmanager.bilka.spaceship.stat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StatRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Stat> getTop() {
        return jdbcTemplate.query(
                "SELECT s.id, s.score, u.username FROM stat AS s JOIN user AS u ON s.user_id = u.id ORDER BY s.score DESC LIMIT 100",
                BeanPropertyRowMapper.newInstance(Stat.class)
        );

    }
    public int save(Stat stats){
        jdbcTemplate.update("INSERT INTO stat(score, user_id) VALUES(?,?)",stats.getScore(),stats.getUser_id());

        return 1;
    }
}
