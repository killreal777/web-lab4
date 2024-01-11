package com.killreal777.service;

import com.killreal777.entity.HitCheck;
import com.killreal777.repositories.HitCheckRepository;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HitCheckService {
    private final HitCheckRepository hitCheckRepository;

    @Autowired
    public HitCheckService(HitCheckRepository hitCheckRepository) {
        this.hitCheckRepository = hitCheckRepository;
    }

    @Transactional
    public List<HitCheck> getAllHitChecks() {
        return hitCheckRepository.findAll();
    }

    @Transactional
    public void addHitCheck(HitCheck hitCheck) {
        hitCheckRepository.save(hitCheck);
    }

    @Transactional
    public void deleteAllHitChecks() {
        hitCheckRepository.deleteAll();
    }
}
