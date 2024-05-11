package com.killreal777.script;

import com.killreal777.entity.AreaDot;
import com.killreal777.entity.HitCheck;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * Class implementing main business logic.
 * Represents script that validates input dot in accordance with technical specifications,
 * checks if the dot hits the area, registers start time and execution time.
 */
@Component
public class HitCheckScript {
    private final AreaDotValidator areaDotValidator;
    private final HitChecker hitChecker;

    public HitCheckScript() {
        this.areaDotValidator = new AreaDotValidator();
        this.hitChecker = new HitChecker();
    }

    public HitCheck execute(AreaDot areaDot) {
        areaDotValidator.validate(areaDot);

        long startTimeNano = System.nanoTime();
        LocalDateTime startTime = LocalDateTime.now();

        boolean isHit = hitChecker.isHit(areaDot);

        long endTimeNano = System.nanoTime();
        long executionTimeNano = endTimeNano - startTimeNano;

        return new HitCheck(areaDot, startTime, executionTimeNano, isHit);
    }
}
