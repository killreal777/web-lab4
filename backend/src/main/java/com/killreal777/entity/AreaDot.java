package com.killreal777.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import jakarta.persistence.Embeddable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Embeddable
public class AreaDot {
    private float r;
    private float x;
    private float y;
}
