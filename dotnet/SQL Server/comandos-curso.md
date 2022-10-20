# COmandos do curso

Para comentar no SQL, é --.

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

Quando eu quero todos os que tenham a letra "g" no nome:

```
SELECT Nome, Sobrenome, Email FROM CLIENTES
WHERE Nome LIKE '%G%'
ORDER BY Nome, Sobrenome
```

## INSERT

Inserir registros no banco de dados.

```
INSERT INTO Clientes (Nome, Sobrenome, Email, AceitaComunicados, DataCadastro)
VALUES ('Leonardo', 'Ruoso Vendramini', 'leonardo@email.com', 1, GETDATE())
```

```
INSERT INTO Clientes VALUES ('Leonardo', 'Ruoso Vendramini', 'leonardo@email.com', 1, GETDATE())
```

O id vai se incrementando, 1, 2, 3, 4... e se eu deletar o 4, e inserir algo, ele vai ter o id 5. Ele continua a contar. Ele é único.

## Update

Recomendado sempre usar com o Id, para atualizar apenas um registro e não todo mundo que atender outra determinado condição.

```
UPDATE Clientes
SET Email = 'emailatualizado@email.com',
    AceitaComunicados = 0
WHERE Id = 3
```

Um caso destrutivo é o update sem o WHERE. **Nunca faça isso**, a não ser que você tenha plena ciência do que está fazendo.

Uma dica é, trabalhar com o BEGIN TRAN, significando que estamos trabalhando em um modo que poderemos desfazer essas alterações.

Se o ROLLBACK for executado, ele voltará ao cenário anterior, quando foi dado o BEGIN TRAN.

```
BEGIN TRAN
ROLLBACK
```

## DELETE

```
DELETE Clientes
WHERE Id = 1
```

## Criação de uma Tabela

```
CREATE TABLE Clientes (
    Id int IDENTITY(1,1) PRIMARY KEY NOT NULL,
    Nome varchar(255) NULL,
    Sobrenome varchar(255) NULL,
    Email varchar(255) NULL,
    AceitaComunicados bit NULL,
    DataCadastro datetime2(7) NULL
)
```

```
CREATE TABLE Produtos (
    Id int IDENTITY(1,1) PRIMARY KEY NOT NULL,
    Nome varchar(255) NOT NULL,
    Cor varchar(255) NULL,
    Preco decimal(13,2) NOT NULL,
    Tamanho varchar(5) NULL,
    Genero char(1) NULL
)
```

### Tipos de dados

https://www.w3schools.com/sql/sql_datatypes.asp

