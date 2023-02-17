package com.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class AssertionsTest {
    @Test
    void validarLancamentos() {
        int[] primeiroLancamento = { 10, 20, 30, 40, 50 };
        int[] segundoLancamento = { -1, 5, 2, 3, 10, 16, 17 };

        Assertions.assertArrayEquals(primeiroLancamento, segundoLancamento);

    }

    @Test
    void validarSeEhNulo() {
        Pessoa pessoa = null;

        Assertions.assertNull(pessoa);
    }

}
