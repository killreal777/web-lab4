package com.killreal777.service;

import com.killreal777.dao.HitCheckDao;
import com.killreal777.entity.HitCheck;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HitCheckServiceImpl implements HitCheckService {

    @Autowired
    private HitCheckDao hitCheckDao;

    /**
     * Selects all HitChecks records form database.
     */
    @Override
    @Transactional
    public List<HitCheck> getAllHitChecks() {
        return hitCheckDao.getAllHitChecks();
    }

    /**
     * Inserts HitCheck record into database.
     */
    @Override
    @Transactional
    public void addHitCheck(HitCheck hitCheck) {
        hitCheckDao.addHitCheck(hitCheck);
    }

    /**
     * Deletes all HitCheckData records from database.
     */
    @Override
    @Transactional
    public void deleteAllHitChecks() {
        hitCheckDao.deleteAllHitChecks();
    }
}
