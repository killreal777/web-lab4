package com.killreal777.entity;

import javax.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String username;
    private String password;

    public User(String username) {
        this.username = username;
    }
}