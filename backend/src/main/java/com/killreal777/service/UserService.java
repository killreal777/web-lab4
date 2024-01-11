package com.killreal777.service;

import com.killreal777.entity.User;
import com.killreal777.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public boolean isUsernameExists(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.isPresent();
    }

    @Transactional
    public void addUser(User user) {
        userRepository.save(user);
    }
}