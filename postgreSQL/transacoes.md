# Transações

Conceito fundamental de qualquer sistema gerenciador de banco de dados.

Conceito de múltiplas etapas/códigos reunidos em apenas 1 transação, onde o resultado precisa ser **tudo ou nada**.

Exemplo:

```
BEGIN;

    UPDATE conta SET valor = valor - 100.00
    WHERE nome = 'Alice';

    UPDATE conta SET valor = valor + 100.00
    WHERE nome = 'Bob';

COMMIT;
```

Se acontecer qualquer erro durante a transação, acontece o ROLLBACK, tudo volta a ser como era antes.

Ou podemos forçar um ROLLBACK.

```
BEGIN;

    UPDATE conta SET valor = valor - 100.00
    WHERE nome = 'Alice';

    UPDATE conta SET valor = valor + 100.00
    WHERE nome = 'Bob';

ROLLBACK;
```

## Save point

```
BEGIN;

    UPDATE conta SET valor = valor - 100.00
    WHERE nome = 'Alice';

SAVEPOINT my_savepoint;

    UPDATE conta SET valor = valor + 100.00
    WHERE nome = 'Bob';
    -- Ops, não era pro Bob, é para o Wally!!!

ROLLBACK TO my_savepoint;

    UPDATE conta SET valor = valor + 100.00;
    WHERE nome = 'Wally';

COMMIT;
```