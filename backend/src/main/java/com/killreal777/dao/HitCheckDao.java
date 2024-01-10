package com.killreal777.dao;

import com.killreal777.entity.HitCheck;

import java.util.List;

public interface HitCheckDao {
    /**
     * Selects all HitChecks records form database.
     */
    List<HitCheck> getAllHitChecks();

    /**
     * Inserts HitCheck record into database.
     */
    public void addHitCheck(HitCheck hitCheck);

    /**
     * Deletes all HitCheckData records from database.
     */
    public void deleteAllHitChecks();
}
