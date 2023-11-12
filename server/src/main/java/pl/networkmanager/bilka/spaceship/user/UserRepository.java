package pl.networkmanager.bilka.spaceship.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public User getByEmail(String email) {
        try {
            return jdbcTemplate.queryForObject(
                    "SELECT * FROM user WHERE email = ?",
                    BeanPropertyRowMapper.newInstance(User.class), email
            );
        } catch (EmptyResultDataAccessException ex) {
            return null;
        }
    }
}
