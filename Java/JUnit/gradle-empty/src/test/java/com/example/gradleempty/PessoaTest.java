package com.example.gradleempty;

import java.time.LocalDate;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class PessoaTest {
    @Test
    void validarCalculoDeIdade() {
        Pessoa pessoa = new Pessoa("Leonardo", LocalDate.of(1991, 2, 22));
        Assertions.assertEquals(31, pessoa.getIdade());
    }
    
}
