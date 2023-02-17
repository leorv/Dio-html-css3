# Database, Schemas e Objetos

## Database

É o banco de dados.

Grupo de schemas e seus objetos, como tabelas, types, views, funções, entre outros.

Seus schemas e objetos não podem ser compartilhados entre si.

Cada database é separado um do outro compartilhando apenas usuários/roles e configurações do cluster PostgreSQL.

## Schemas

É um grupo de objetos, como tabelas, types, views, funções, entre outros.

É possível relacionar objetos entre diversos schemas.

Por exemplo: schema public e schema curso podem ter tabelas com o mesmo nome (teste por exemplo) relacionando-se entre si.

## Objetos

São as tabelas, views, funções, types, sequences, entre outros, pertencentes aos schemas.

## Comandos para o database

https://www.postgresql.org/docs/12/managing-databases.html

Exemplo de alterações no database:

```
ALTER DATABASE name RENAME TO new_name;

ALTER DATABASE name OWNER TO {new_owner | CURRENT_USER | SESSION_USER}

ALTER DATABASE name SET TABLESPACE new_tablespace;
```

## Comandos para o schema

https://www.postgresql.org/docs/12/sql-createschema.html

https://www.postgresql.org/docs/12/sql-alterschema.html

Melhores práticas:

```
CREATE SCHEMA IF NOT EXISTS schema_name [AUTHORIZATION role_specification]

DROP SCHEMA IF EXISTS name;
```
