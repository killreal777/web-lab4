package com.killreal777.rest;

import com.killreal777.entity.AreaDot;
import com.killreal777.entity.HitCheck;

import com.killreal777.service.HitCheckService;

import com.killreal777.script.HitCheckException;
import com.killreal777.script.HitCheckScript;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class HitCheckRestController {

    @Autowired
    private HitCheckService hitCheckService;

    @Autowired
    private HitCheckScript hitCheckScript;


    @GetMapping("/hitChecks")
    public List<HitCheck> show() {
        return hitCheckService.getAllHitChecks();
    }

    @PostMapping("/hitChecks")
    public void check(@RequestBody AreaDot areaDot) {
        try {
            HitCheck hitCheck = hitCheckScript.execute(areaDot);
            hitCheckService.addHitCheck(hitCheck);
        } catch (HitCheckException ignored) {}
    }

    @DeleteMapping("/hitChecks")
    public void clean() {
        hitCheckService.deleteAllHitChecks();
    }
}
