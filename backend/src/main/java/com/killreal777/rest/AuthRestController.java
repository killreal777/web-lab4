package com.killreal777.rest;

import com.killreal777.entity.User;
import com.killreal777.service.UserSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthRestController {

    @Autowired
    private UserSecurityService userSecurityService;

    @PostMapping("/registration")
    public void register(@RequestBody User user) {
        if (userSecurityService.)
    }
}
