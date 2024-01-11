package com.killreal777.rest;

import com.killreal777.entity.User;
import com.killreal777.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class AuthRestController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userService.isUsernameExists(user.getUsername())) {
            return new ResponseEntity<>("Username is taken", HttpStatus.BAD_GATEWAY);
        } else {
            userService.addUser(user);
            return new ResponseEntity<>("User registered", HttpStatus.OK);
        }
    }
}