package com.killreal777.rest;

import com.killreal777.entity.AreaDot;
import com.killreal777.entity.HitCheck;

import com.killreal777.service.HitCheckService;

import com.killreal777.script.HitCheckException;
import com.killreal777.script.HitCheckScript;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> check(@RequestBody AreaDot areaDot) {
        try {
            HitCheck hitCheck = hitCheckScript.execute(areaDot);
            hitCheckService.addHitCheck(hitCheck);
            return new ResponseEntity<>("Hit check success", HttpStatus.OK);
        } catch (HitCheckException ignored) {
            return new ResponseEntity<>("Hit check fail", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/hitChecks")
    public ResponseEntity<String> clean() {
        hitCheckService.deleteAllHitChecks();
        return new ResponseEntity<>("Clean success", HttpStatus.OK);
    }
}
