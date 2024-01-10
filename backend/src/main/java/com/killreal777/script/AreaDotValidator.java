package com.killreal777.script;

import com.killreal777.entity.AreaDot;

class AreaDotValidator {
    private final float X_MIN = -3;
    private final float X_MAX = 5;

    private final float Y_MIN = -4;
    private final float Y_MAX = 4;

    protected void validate(AreaDot areaDot) {
        final float x = areaDot.getX();
        final float y = areaDot.getY();

        if (x <= X_MIN || x >= X_MAX || y <= Y_MIN || y >= Y_MAX) {
            throw new HitCheckException();
        }
    }
}
