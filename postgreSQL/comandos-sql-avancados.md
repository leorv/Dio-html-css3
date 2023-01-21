# Comandos avançados

## Views

São visões, "camadas" para as tabelas.

São "alias" para uma ou mais queries.

Aceitam comandos SELECT, INSERT, UPDATE e DELETE.

```
CREATE [ OR REPLACE ] [ TEMP | TEMPORARY ] [ RECURSIVE ] VIEW name [ ( column_name [, ...] ) ]
    [ WITH ( view_option_name [= view_option_value] [, ... ] ) ]
    AS query
    [ WITH [ CASCADED | LOCAL ] CHECK OPTION ]
```

https://www.postgresql.org/docs/12/sql-createview.html

Usar Views é considerado uma boa prática, pois quando foram querer usar o seu banco de dados, irão usar somente as Views, não tendo acesso direto ao banco de dados.

O comando INSERT, UPDATE e DELETE só pode ser usado se a View referencia uma única tabela, se houver joins, etc, será permitido somente o SELECT.

Cuidado com o comando `OR REPLACE` para não substituir um código que já existe e que você precisaria.

`TEMP | TEMPORARY` faz a view pertencer somente a sua sessão, se sair e entrar de novo, perdeu ela. Outras pessoas não tem acesso a essa view.

`RECURSIVE` é um SELECT dentro da própria view que chama ela mesma, até esgotar uma determinada opção.

`[ WITH [ CASCADED | LOCAL ] CHECK OPTION ]` são opções a serem usadas no INSERT, UPDATE e DELETE da view.

### Idempotência

```
CREATE OR REPLACE VIEW vw_bancos AS (
    SELECT numero, nome, ativo
    FROM banco
);

SELECT numero, nome, ativo
FROM vw_bancos;
```

```
CREATE OR REPLACE VIEW vw_bancos (banco_numero, banco_nome, banco_ativo) AS (
    SELECT numero, nome, ativo
    FROM banco
);

SELECT banco_numero, banco_nome, banco_ativo
FROM vw_bancos;
```

** Funcionam apenas para VIEWS com apenas uma tabela:**

```
INSERT INTO vw_bancos(numero, nome, ativo) VALUES (100, "Banco CEM", TRUE);
UPDATE vw_bancos SET nome = 'Banco 100' WHERE numero = 100;
DELETE FROM vw_bancos WHERE numero = 100;
```

### Recursive

```
CREATE OR REPLACE RECURSIVE VIEW (nome_da_view) (campos_da_view) AS (
    SELECT base
    UNION ALL
    SELECT campos
    FROM tabela_base
    JOIN (nome da view)
);
```

Obrigatória a existência de campos na view.
UNION ALL.
