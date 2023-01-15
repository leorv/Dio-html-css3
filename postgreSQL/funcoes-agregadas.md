# Funções agregadas

https://www.postgresql.org/docs/12/functions-aggregate.html

https://pt.wikibooks.org/wiki/PostgreSQL_Pr%C3%A1tico/Fun%C3%A7%C3%B5es_Internas/Agrupamento

## Todas as colunas de uma tabela

```
SELECT * FROM information_schema.columns WHERE table_name = 'banco';

SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'banco';
```

## Algumas funções de agregação

### AVG

```
SELECT AVG(valor) FROM cliente_transacoes;
```

### COUNT

```
SELECT COUNT(numero) FROM cliente;

SELECT COUNT(numero), email
FROM cliente
WHERE email ILIKE '%gmail.com'
GROUP BY email;

SELECT COUNT(id), tipo_transacao_id
FROM cliente_transacoes
GROUP BY tipo_transacao_id
HAVING COUNT(id) > 150;
```

Este HAVING acima é muito útil também para verificarmos registros duplicados.

### MAX e MIN

```
SELECT MAX(numero) from cliente;

SELECT MIN(numero) from cliente;

SELECT MAX(valor), tipo_transacao_id
FROM cliente_transacoes
GROUP BY tipo_transacao_id;

SELECT MIN(valor), tipo_transacao_id
FROM cliente_transacoes
GROUP BY tipo_transacao_id;
```

### SUM

```
SELECT SUM(valor), tipo_transacao_id
FROM cliente_transacoes
GROUP BY tipo_transacao_id
ORDER BY tipo_transacao_id;

SELECT SUM(valor), tipo_transacao_id
FROM cliente_transacoes
GROUP BY tipo_transacao_id
ORDER BY tipo_transacao_id DESC;
```
