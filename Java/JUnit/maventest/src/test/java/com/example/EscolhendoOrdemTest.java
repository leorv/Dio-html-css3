package com.example;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.TestMethodOrder;

// também tem o MethodOrderer.Random.class
// @TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestMethodOrder(MethodOrderer.MethodName.class)
public class EscolhendoOrdemTest {
    // @Order(4)
    @Test
    void validaFluxoA() {
        Assertions.assertTrue(true);
    }

    // @Order(3)
    @Test
    void validaFluxoB() {
        Assertions.assertTrue(true);
    }

    // @Order(2)
    @Test
    void validaFluxoC() {
        Assertions.assertTrue(true);
    }

    // @Order(1)
    @Test
    void validaFluxoD() {
        Assertions.assertTrue(true);
    }

    
}
