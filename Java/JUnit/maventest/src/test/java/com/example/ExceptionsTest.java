package com.example;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;

public class ExceptionsTest {

    @Test
    void validarCenarioDeExcecaoNaTransferencia() {
        Conta contaOrigem = new Conta("123", 0);
        Conta contaDestino = new Conta("123", 100);

        TransferenciaEntreContas transferenciaEntreContas = new TransferenciaEntreContas();

        Assertions.assertThrows(IllegalArgumentException.class, () -> {
            transferenciaEntreContas.transfere(contaOrigem, contaDestino, 0);
        });

        // pode usar também o assert does not throw.
        
    }
    
}
