package com.FactorialCalculator.FactorialService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class FactorialResource {

    @GetMapping("/calculate/{positiveInteger}")
    public int getFactorial(@PathVariable int positiveInteger) {
        return calculateFactorial(positiveInteger);
    }

    public static int calculateFactorial(int positiveInteger) {
        if (positiveInteger == 0 || positiveInteger == 1) {
            return 1;
        } else {
            return positiveInteger * calculateFactorial(positiveInteger - 1);
        }
    }
}
