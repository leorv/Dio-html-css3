# Idempotência

## INSERT

Não é uma boa prática:

```
INSERT INTO agencia (banco_numero, numero, nome)
    SELECT 341, 1, 'Centro da cidade'
    WHERE NOT EXISTS (
        SELECT banco_numero, numero, nome
        FROM agencia
        WHERE banco_numero = 341
        AND numero = 1
        AND nome = 'Centro da cidade');
```

Usar `ON CONFLICT`:

```
INSERT INTO agencia (banco_numero, numero, nome)
    VALUES (341, 1, 'Centro da cidade')
    ON CONFLICT(banco_numero, numero) DO NOTHING;
```

Você pode fazer um UPDATE por exemplo, no ON CONFLICT, ao invés do NOTHING.

## UPDATE

```
UPDATE tabela SET campo1 = novo_valor WHERE condição;
```

Muito cuidado, sempre usar WHERE em updates, senão vai atualizar tudo na tabela.

## DELETE

```
DELETE FROM tabela SET campo1 = novo_valor WHERE condição;
```

## TRUNCATE

"Esvazia" a tabela. Cuidado com esse tipo de comando.