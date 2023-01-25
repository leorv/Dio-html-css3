# Funções

Conjunto de códigos que são executados **dentro de uma transação** com a finalidade de facilitar a programação e obter o reaproveitamento e reutilização de código.

Existem 4 tipos de funções:

- Query language functions (funções escritas em SQL)
- Procedural language functions (funções escritas em, por exemplo, PL/pgSQL ou PL/py)
- Internal functions
- C-language functions

Porém, o foco aqui é falar sobre **User defined functions**. Funções que podem ser escritas pelo usuário.

## Linguagens

- SQL
- PL/pgSQL
- PL/PY
- PL/PHP
- PL/Ruby
- PL/Java
- PL/Lua
- ...

## Definição

```
CREATE [ OR REPLACE ] FUNCTION
    name ( [ [ argmode ] [ argname ] argtype [ { DEFAULT | = } default_expr ] [, ...] ] )
    [ RETURNS rettype
      | RETURNS TABLE ( column_name column_type [, ...] ) ]
  { LANGUAGE lang_name
    | TRANSFORM { FOR TYPE type_name } [, ... ]
    | WINDOW
    | { IMMUTABLE | STABLE | VOLATILE }
    | [ NOT ] LEAKPROOF
    | { CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT }
    | { [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER }
    | PARALLEL { UNSAFE | RESTRICTED | SAFE }
    | COST execution_cost
    | ROWS result_rows
    | SUPPORT support_function
    | SET configuration_parameter { TO value | = value | FROM CURRENT }
    | AS 'definition'
    | AS 'obj_file', 'link_symbol'
  } ...
```

## Idempotência

`OR REPLACE`

Dá segurança e trás melhor prática de programação.

- Mesmo nome.
- Mesmo tipo de retorno.
- Mesmo número de parâmetros/argumentos.

Esses são os requisitos para trabalhar com o OR REPLACE.

## Returns

Tipos de retorno:

- Integer
- Char/Varchar
- Boolean
- Row
- Table
- JSON

## Segurança

- Security
    - Invoker => quer dizer que você vai permitir que a função seja executada com as permissões que o usuário que está executando a função tem. Ou seja, se ele não tem permissão de INSERT e a função faz isso, esse usuário vai tomar um erro.
    - Definer => faz com que o usuário que está executando a função a execute com as permissões do usuário que criou a função. Se o super usuário criou a função, e um usuário que não tem permissão nenhuma no banco de dados for executar a função, ele pode executar com as permissões de super usuário, muito cuidado com isso. Mas para algumas ações pode ser recomendado.

## Comportamento da função

- Immutable
    - Não pode mudar o banco de dados. Funções que garantem o mesmo resultado para o mesmo argumento(s). Evitar a utilização de selects, pois tabelas podem sofrer alterações.
- Stable
    - Não pode alterar o banco de dados.
    - Funções que garantem o mesmo resultado para os mesmos argumentos da função. Trabalha melhor com tipos current_timestamp e outros tipos de variáveis. Podem conter selects.
- Volatille
    - Comportamento padrão. Aceita todos os cenários.

## Segurança e boas práticas

- CALLED ON NULL INPUT
    - Padrão.
    - Se qualquer um dos parâmetros for NULL, a função será executada.
- RETURNS NULL ON NULL INPUT
    - Se qualquer um dos parâmetros for NULL, a função retornará NULL.

O explicado acima para o INVOKER e DEFINER vale para:

- SECURITY INVOKER
- SECURITY DEFINER

## Recursos

### COST

Custo por row em unidade de CPU.

### ROWS

Número estimado de linhas que será analisada pelo planner.

## SQL Functions

Não é possível utilizar **transações**.

```
CREATE OR REPLACE FUNCTION fc_somar(INTEGER, INTEGER)
RETURNS INTEGER
LANGUAGE SQL
AS $$
    SELECT $1 + $2;
$$;
```

```
CREATE OR REPLACE FUNCTION fc_somar(num1 INTEGER, num2 INTEGER)
RETURNS INTEGER
AS $$
    SELECT num1 + num2;
$$;
```

```
CREATE OR REPLACE FUNCTION fc_bancos_add(p_numero INTEGER, p_nome VARCHAR, p_ativo BOOLEAN)
RETURNS TABLE(numero INTEGER, nome VARCHAR)
RETURNS NULL ON NULL INPUT
LANGUAGE SQL
AS $$
    INSERT INTO banco(numero, nome, ativo)
    VALUES(p_numero, p_nome, p_ativo);

    SELECT numero, nome
    FROM banco
    WHERE numero = p_numero;
$$;
```

## PL/PGSQL

```
CREATE OR REPLACE FUNCTION banco_add(p_numero INTEGER, p_nome VARCHAR, p_ativo BOOLEAN)
RETURNS BOOLEAN
LANGUAGE PLPGSQL
AS $$
DECLARE variavel_id INTEGER;
BEGIN
    SELECT INTO variavel_id numero FROM banco WHERE nome = p_nome;

    IF variavel_id IS NULL THEN
        INSERT INTO banco(numero, nome, ativo) VALUES(p_numero, p_nome, p_ativo);
    ELSE
        RETURN FALSE;
    END IF;

    SELECT INTO variavel_id numero FROM banco WHERE nome = p_nome;

    IF variavel_id IS NULL THEN
        RETURN FALSE;
    ELSE
        RETURN TRUE;
    END IF;
END; $$;

SELECT banco_add(13, 'Banco Doido', true);
