# Joins

Ele é utilizado quando a gente está fazendo nossos Selects e precisamos unir uma ou mais tabelas ao select principal.

## Definição

- JOIN
- LEFT JONI
- RIGHT JOIN
- FULL JOIN
- CROSS JOIN

### JOIN

Ou INNER JOIN, são sinônimos.

```
-- 296 tuplas
SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
JOIN agencia ON agencia.banco_numero = banco.numero;

-- número 296
SELECT COUNT(banco.numero)
FROM banco
JOIN agencia ON agencia.banco_numero = banco.numero;

-- Quantos bancos a gente tem agência? Retorna 9 tuplas.
SELECT COUNT(banco.numero)
FROM banco
JOIN agencia ON agencia.banco_numero = banco.numero
GROUP BY banco.numero;

-- Quantos bancos a gente tem agência? Retorna número 9.
SELECT COUNT(DISTINCT banco.numero)
FROM banco
JOIN agencia ON agencia.banco_numero = banco.numero;

-- JOIN MAIS COMPLETO
SELECT	banco.nome,
		agencia.nome,
		conta_corrente.numero,
		conta_corrente.digito,
		cliente.nome
FROM banco
JOIN agencia
	ON agencia.banco_numero = banco.numero
JOIN conta_corrente
	ON conta_corrente.banco_numero = agencia.banco_numero
	AND conta_corrente.agencia_numero = agencia.numero
JOIN cliente
	ON cliente.numero = conta_corrente.cliente_numero;
```

### LEFT JOIN ou LEFT OUTER JOIN

Usa o conceito de tabela do lado esquerdo e tabela do lado direito.

Traz todos os dados da tabela do lado esquerdo e se houver correspondência com o lado direito, traz essa relação.

Ou seja, mesmo os que não tem correspondência com o lado direito, serão mostrados.

```
SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
LEFT JOIN agencia ON agencia.banco_numero = banco.numero;
```

### RIGHT JOIN ou RIGHT OUTER JOIN

Exatamente a mesma coisa que o left, mas ele vai dar prioridade ao da direita.

```
SELECT agencia.numero, agencia.nome, banco.numero, banco.nome
FROM agencia
RIGHT JOIN banco ON banco.numero = agencia.banco_numero;
```

### FULL JOIN ou FULL OUTER JOIN

Traz praticamente todas as possibilidades de relacionamento.

Não é recomendado, salvo para alguns relatórios, pois pode trazer mais registros do que realmente precisamos.

```
SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
FULL JOIN agencia ON agencia.banco_numero = banco.numero;
```

### CROSS JOIN

Todos os dados de uma tabela serão cruzados com todos os dados de outra tabela, referenciada no CROSS JOIN, criando uma matriz.

Usar isso em produção pode impactar seu ambiente, um desperdício de recursos.

