# Como genrenciar novos usuários e logins

Existem várias formas de autenticação para a criação de novos logins.

- Windows Authentication

```
CREATE LOGIN login_name   
   FROM WINDOWS
[ WITH DEFAULT_DATABASE = database_name
| DEFAULT_LANGUAGE = language_name ];
```

- SQL Server Authentication

```
 CREATE LOGIN login_name 
  WITH PASSWORD = { 'password' | hashed_password HASHED } [ MUST_CHANGE ]
[ , SID = sid_value
  | DEFAULT_DATABASE = database_name
  | DEFAULT_LANGUAGE = language_name
  | CHECK_EXPIRATION = { ON | OFF }
  | CHECK_POLICY = { ON | OFF }
  | CREDENTIAL = credential_name ];
```

- Certificate

```
CREATE LOGIN login_name
FROM CERTIFICATE certificate_name;
```

- Asymmetric key

```
CREATE LOGIN login_name
FROM ASYMMETRIC KEY asym_key_name;
```

## Criar um login com autenticação do Windows

```
CREATE LOGIN marla 
FROM WINDOWS;
```

## Criar um login com autenticação do SQL Server

```
CREATE LOGIN marla
WITH PASSWORD = 'Marla@123';
```

## Criar um login a partir de um certificado

```
CREATE LOGIN marla
FROM CERTIFICATE certificate123;
```

## Criar um login a partir de uma chave assimétrica

```
CREATE LOGIN JordanS
FROM ASYMMETRIC KEY key_123;
```

## Criar um novo usuário com T-SQL

Depois de criar um login, é hora de criar um usuário.

Para ver os usuários existentes, use:

```
SELECT name,authentication_type, default_language_name
FROM {database_name}.sys.database_principals;
```

O database_name é opcional.

### CREATE USER

```
CREATE USER Manager FOR LOGIN marla;
```

## Permissões

```
GRANT privileges 
  ON database_name.object
TO {user_name |PUBLIC |role_name}
[WITH GRANT OPTION]; 
```

Exemplo:

```
GRANT SELECT, INSERT, UPDATE, ALTER, DELETE TO Manager;
```


