package pl.networkmanager.bilka.spaceship.security;

import at.favre.lib.crypto.bcrypt.BCrypt;

public class Password {
    static public String getHashPwd(String password) {
        return BCrypt.withDefaults().hashToString(12, password.toCharArray());
    }

    static public boolean verify(String password, String hashPwd) {
        return BCrypt.verifyer().verify(password.toCharArray(), hashPwd).verified;
    }
}
