package com.killreal777.dao;

import com.killreal777.entity.HitCheck;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class HitCheckDaoImpl implements HitCheckDao {

    @Autowired
    private EntityManager entityManager;

    /**
     * Selects all HitCheckData records form database.
     */
    @Override
    public List<HitCheck> getAllHitChecks() {
        Query query = entityManager.createQuery("select entity from HitCheck entity");
        return query.getResultList();
    }

    /**
     * Inserts HitCheck record into database.
     */
    @Override
    public void addHitCheck(HitCheck hitCheck) {
        entityManager.persist(hitCheck);
    }

    /**
     * Deletes all HitCheck records from database.
     */
    @Override
    public void deleteAllHitChecks() {
        entityManager.createNativeQuery("truncate table hit_checks").executeUpdate();
    }
}
