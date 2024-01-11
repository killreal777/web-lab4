package com.killreal777.entity;

import javax.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "hit_checks")
public class HitCheck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Embedded
    private AreaDot areaDot;

    private LocalDateTime startTime;
    private long executionTimeNano;
    private boolean isHit;

    public HitCheck(AreaDot areaDot, LocalDateTime startTime, long executionTimeNano, boolean isHit) {
        this.areaDot = areaDot;
        this.startTime = startTime;
        this.executionTimeNano = executionTimeNano;
        this.isHit = isHit;
    }
}
