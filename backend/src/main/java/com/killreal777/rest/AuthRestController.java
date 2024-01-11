package com.killreal777.rest;

import com.killreal777.entity.User;
import com.killreal777.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthRestController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public void register(@RequestBody User user) {
        System.out.println("START");
        if (userService.isUsernameExists(user.getUsername())) {
            System.out.println("USERNAME ALREADY EXISTS");
            return;
        } else {
            userService.addUser(user);
            System.out.println("USER ADDED");
        }
    }
}