package com.FactorialCalculator.FactorialService;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class FactorialServiceApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
    void testFactorial() {
	    assertEquals(FactorialResource.calculateFactorial(0), 1);
	    assertEquals(FactorialResource.calculateFactorial(1), 1);
	    assertEquals(FactorialResource.calculateFactorial(5), 120);
	    assertEquals(FactorialResource.calculateFactorial(8), 40320);
    }
}
