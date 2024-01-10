package com.killreal777.service;

import com.killreal777.entity.HitCheck;

import java.util.List;

public interface HitCheckService {
    /**
     * Selects all HitChecks records form database.
     */
    List<HitCheck> getAllHitChecks();

    /**
     * Inserts HitCheck record into database.
     */
    public void addHitCheck(HitCheck hitCheck);

    /**
     * Deletes all HitCheck records from database.
     */
    public void deleteAllHitChecks();
}
