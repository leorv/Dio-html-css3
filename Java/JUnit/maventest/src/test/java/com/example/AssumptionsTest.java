package com.example;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
// import org.junit.jupiter.api.condition.EnabledIfEnvironmentVariable;

public class AssumptionsTest {
    @Test
    // @EnabledIfEnvironmentVariable(named = "USER", matches = "leonardo")
    void validarAlgoSomenteSeUsuarioForLeonardo() {
        Assumptions.assumeTrue("leonardo".equals(System.getenv("USER")));
        // Pode usar também assume false.
        Assertions.assertEquals(10, 5+5);
    }
}
