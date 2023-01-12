# Conceitos users/roles/groups

Nas versões anteriores do PostgreSQL 8.1, usuários e roles tinham papéis diferentes, atualmente roles e users são alias.

## Definição

Roles (papéis ou funções), users (usuários) e grupo de usuários são "contas", perfis de atuação em um banco de dados, que possuem permissões em comum específicas.

É possível que roles pertençam a outras roles.

## Administração de users/roles/groups

```
CREATE ROLE name [ [WITH] option [...]]
```

Onde as opções podem ser:

- SUPERUSER | NOSUPERUSER &rarr; o padrão é NOSUPERUSER. Uma role super usuário tem privilégios praticamente ilimitados, então evitar usá-la, somente usar em casos realmente necessários. Usar com cautela.
- CREATEDB | NOCREATEDB &rarr; a role tem permissão ou não de criar banco de dados.
- CREATEROLE | NOCREATEROLE
- INHERIT | NOINHERIT &rarr; sempre que a role pertencer a outra role, ela vai herdar ou não as permissões da role pai
- LOGIN | NOLOGIN &rarr; essa role pode ou não se conectar ao banco de dados.
- REPLICATION | NOREPLICATION &rarr; serve para fazer ou não back-ups, ver também no final do arquivo pg_hba.conf.
- BYPASSRLS | NOBYPASSRLS  &rarr; parte de segurança a nível de role.
- CONNECTION LIMIT connlimit &rarr; definir quantas conexões simultâneas a role pode ter no banco de dados.
- [ENCRYPTED] PASSWORD 'password' | PASSWORD NULL
- VALID UNTIL 'timestamp' &rarr; até que data essa role tem acesso ao banco de dados.
- IN ROLE role_name [...] &rarr; o novo usuário / role vai pertencer a role definida pelo IN ROLE.
- IN GROUP role_name [...] &rarr; deprecated = alias IN ROLE
- ROLE role_name [...] &rarr; a role que está sendo informada passa a pertencer ao grupo da role que está sendo criada.
- ADMIN role_name [...] &rarr; todas as roles que estão sendo definidas aqui passaram a fazer parte da nova role e terão acessos administrativos dentro da nova role.
- USER role_name [...] &rarr; deprecated = usa como role.
- SYSID uid &rarr; deprecated por questões de compatibilidade.

## Exemplo de códigos

Administradores não poderão logar no banco dados? Diretamente não. Roles que fazer parte de administradores sim. É uma boa prática.

Se colocar CONNECTION LIMIT -1, tem conexões ilimitadas.

```
CREATE ROLE administradores
    CREATEDB
    CREATEROLE
    INHERIT
    NOLOGIN
    REPLICATION
    BYPASSRLS
    CONNECTION LIMIT 1;
```

```
CREATE ROLE professores
    NOCREATEDB
    NOCREATEROLE
    INHERIT
    NOLOGIN
    NOBYPASSRLS
    CONNECTION LIMIT 10;
```

```
CREATE ROLE alunos
    NOCREATEDB
    NOCREATEROLE
    INHERIT
    NOLOGIN
    NOBYPASSRLS
    CONNECTION LIMIT 90;
```

```
CREATE ROLE daniel LOGIN PASSWORD '123' IN ROLE professores;
```

## Associação entre roles

Quando uma role assume permissões de outras roles, necessário a opção INHERIT.

No momento de criação da role:

- IN ROLE &rarr; passa a pertencer a role informada.
- ROLE &rarr; a role informada passa a pertencer a nova role.

Ou após a criação da role:

- GRANT [role a ser concedida] TO [role a assumir as permissões]

Exemplo:

A role daniel passa a assumir as permissões de professores.

```
CREATE ROLE daniel LOGIN CONNECTION LIMIT 1 PASSWORD '123' IN ROLE professores;
```

Ou de outra forma:

```
CREATE ROLE daniel LOGIN CONNECTION LIMIT 1 PASSWORD '123';

GRANT professores TO daniel;
```

## Desassociar membros entre roles

REVOKE [role que será revogada] FROM [role que terá suas permissões revogadas]

```
REVOKE professores FROM daniel;
```

## Alterando uma role

É igual a criação de uma role.

ALTER ROLE role_especification [WITH] option [...]

Onde option pode ser:

- SUPERUSER | NOSUPERUSER
- CREATEDB | NOCREATEDB
- CREATEROLE | NOCREATEROLE
- CREATEUSER | NOCREATEUSER
- INHERIT | NOINHERIT
- LOGIN | NOLOGIN
- REPLICATION | NOREPLICATION
- BYPASSRLS | NOBYPASSRLS
- CONNECTION LIMIT connlimit
- VALID UNTIL

## Excluindo uma role

DROP ROLE role_especification;

```
DROP ROLE daniel
```

## Listar roles criadas

comando: `\du`

Ou usando um código específico:

```
SELECT * FROM pg_roles;
```

## Administrando os acessos

GRANT &rarr; São os privilégios de acesso aos bancos de dados.

Privilégios:

- tabela
- coluna
- sequence
- database
- domain
- foreign data wrapper
- foreign server
- function
- language
- large select
- schema
- tablespace
- type

### Databases

```
GRANT {{CREATE | CONNECT | TEMPORARY | TEMP} [...] | ALL [PRIVILEGES]}
    ON DATABASE database_name [...]
    TO role_specification [...] [WITH GRANT OPTION]
```

### Schemas

```
GRANT {{CREATE | USAGE} [...] | ALL [PRIVILEGES]}
    ON SCHEMA schema_name [...]
    TO role_specification [...] [WITH GRANT OPTION]
```

### Table

```
GRANT {{SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER} [...] | ALL [PRIVILEGES]}
    ON {[TABLE] table_name [...]
        | ALL TABLES IN SCHEMA schema_name [...]}
    TO role_specification [...] [WITH GRANT OPTION]
```

## Revogar privilégios REVOKE

Retira as permissões da role.

### Database

```
REVOKE [GRANT OPTION FOR]
    {{CREATE | CONNECT | TEMPORARY | TEMP} [...] [PRIVILEGES]}
    ON DATABASE database_name [...]
    FROM {[GROUP] role_name | PUBLIC} [...]
    [CASCADE | RESTRICT]
```

### Schema

```
REVOKE [GRANT OPTION FOR]
    {{CREATE | USAGE} [...] | ALL [PRIVILEGES]}
    ON SCHEMA schema_name [...]
    FROM {[GROUP] role_name | PUBLIC} [...]
    [CASCADE | RESTRICT]
```

### Table

```
REVOKE [GRANT OPTION FOR]
    {{SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER}
    [...] | ALL [PRIVILEGES]}
    ON {[TABLE] table_name [...]
        | ALL TABLES IN SCHEMA schema_name [...]}
    FROM {[GROUP] role_name | PUBLIC} [...]
    [CASCADE | RESTRICT]
```

## Simplificações

Revogando todas as permissões:

```
REVOKE ALL ON ALL TABLES IN SCHEMA [schema] FROM [role];

REVOKE ALL ON SCHEMA [schema] FROM [role];

REVOKE ALL ON DATABASE [database] FROM [role];
```

