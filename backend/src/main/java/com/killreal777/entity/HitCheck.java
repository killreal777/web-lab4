package com.killreal777.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "hit_checks")
public class HitCheck {

    @Id
    @GeneratedValue
    private int id;

    @Embedded
    private AreaDot areaDot;

    private LocalTime startTime;
    private long executionTimeNano;
    private boolean isHit;

    public HitCheck(AreaDot areaDot, LocalTime startTime, long executionTimeNano, boolean isHit) {
        this.areaDot = areaDot;
        this.startTime = startTime;
        this.executionTimeNano = executionTimeNano;
        this.isHit = isHit;
    }
}
