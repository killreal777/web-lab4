package com.killreal777.service;

import com.killreal777.entity.User;
import com.killreal777.repositories.UserRepository;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public boolean isUsernameExists(String username) {
        return userRepository.existsByUsername(username);
    }

    @Transactional
    public void addUser(User user) {
        userRepository.save(user);
    }
}