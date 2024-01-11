package com.killreal777.validators;

import com.killreal777.entity.User;
import com.killreal777.service.UserSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class UserValidator implements Validator {

    @Autowired
    private UserSecurityService userSecurityService;

    @Override
    public boolean supports(Class<?> clazz) {
        return User.class.equals(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
