package com.example;

import java.time.LocalDate;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;

public class PessoaTeste {
    @Test
    public void deveCalcularIdadeCorretamente() {
        Pessoa pessoa = new Pessoa("Leonardo", LocalDate.of(1991, 2, 22));
        Assertions.assertEquals(31, pessoa.getIdade());
    }

    @Test
    public void deveRetornarSeEhMaiorDeIdade() {
        Pessoa pessoa = new Pessoa("Leonardo", LocalDate.of(1991, 2, 22));
        Assertions.assertTrue(pessoa.ehMaiorDeIdade());

        Pessoa pessoa2 = new Pessoa("João", LocalDate.of(2015, 2, 22));
        Assertions.assertFalse(pessoa2.ehMaiorDeIdade());
    }
}
