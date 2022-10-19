# COmandos do curso

## Select

Tudo:

```
SELECT * FROM CLIENTES;
```

### Ordenando

```
SELECT * FROM CLIENTES
ORDER BY Nome
```

Ordenar ao contrário, decrescente:

```
SELECT * FROM CLIENTES
ORDER BY Nome DESC
```

Crescente (padrão):

```
SELECT * FROM CLIENTES
ORDER BY Nome ASC
```

Ordenar por mais de uma coluna:

```
SELECT * FROM CLIENTES
ORDER BY Nome, Sobrenome
```

Escolhendo as colunas para mostrar:

```
SELECT Nome, Sobrenome, Email FROM CLIENTES
ORDER BY Nome, Sobrenome
```

## Where

Quando queremos filtrar determinados tipos de dados.

```
SELECT Nome, Sobrenome, Email FROM CLIENTES
WHERE Nome = 'Adam'
ORDER BY Nome, Sobrenome
```

```
SELECT Nome, Sobrenome, Email FROM CLIENTES
WHERE Nome = 'Adam' AND Sobrenome = 'Reynolds'
ORDER BY Nome, Sobrenome
```

Pode-se usar o OR (ou) também, o mesmo princípio da programação:

```
SELECT Nome, Sobrenome, Email FROM CLIENTES
WHERE Nome = 'Adam' OR Sobrenome = 'Reynolds'
ORDER BY Nome, Sobrenome
```

## LIKE

Quando quero que todos os meus clientes, por exemplo, comecem com "g".

Assim não funciona.

```
SELECT Nome, Sobrenome, Email FROM CLIENTES
WHERE Nome = 'G'
ORDER BY Nome
```

Usamos pra isso o LIKE.

```
SELECT Nome, Sobrenome, Email FROM CLIENTES
WHERE Nome LIKE 'G%'
ORDER BY Nome, Sobrenome
```

