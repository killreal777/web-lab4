package com.killreal777.repositories;

import com.killreal777.entity.HitCheck;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HitCheckRepository extends JpaRepository<HitCheck, Integer> {
}
