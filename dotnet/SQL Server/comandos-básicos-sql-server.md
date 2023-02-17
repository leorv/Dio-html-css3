# Comandos Básicos

Sempre ao final dos comandos, deve-se dar o comando GO.

## Comandos mais simples

### Mostrar os bancos de dados

```
select name from sys.databases;
go
```

### Criando um banco de dados

```
create database db_teste;
```

### Definir o banco de dados para trabalho

```
use db_teste;
```

### Mostrar as tabelas

```
SELECT table_name, table_schema, table_type
FROM information_schema.tables
ORDER BY table_name ASC;
```

### Criar tabela

```
create table tbl_teste (
    id int primary key,
    nome varchar(20)
);
go
```

### Inserindo dados

```
insert into tbl_teste(id, nome) values(5, "Fábio");
go
```

Select, normal, como se fosse mySql:

```
select * from tbl_teste;
```

## Ver estrutura da tabela

Comando mais simples:

```
select column_name, is_nullable, data_type, character_maximum_length from information_schema.columns where table_name = 'clientes';
go
```

```
EXEC sp_help 'dbo.mytable';
```

```
------------------------------------------
-- Método 1: Object Explorer
------------------------------------------
-- Curso -> Tables -> Amigos -> Columns
-- Curso -> Tables -> Amigos -> Botão direito em Amigos -> Design
 
 
------------------------------------------
-- Método 2: Views de sistema
------------------------------------------
select * from information_schema.columns where table_name = 'amigos'
select * from sys.all_columns where object_id = object_id('amigos')
select * from sys.columns where object_id = object_id('amigos')
 
 
------------------------------------------
-- Método 3: Stored Procedures
------------------------------------------
execute sp_columns amigos
execute sp_help amigos
 
-- Dica: sp_help = ALT+F1
 
 
------------------------------------------
-- Método 4: Funções de metadados
------------------------------------------
select
    -- col_name (table_object_id, column_id)
    col_name (object_id('amigos'), 1) col_name_1,
    col_name (object_id('amigos'), 2) col_name_2,
    col_name (object_id('amigos'), 3) col_name_3_NaoExisteVoltaNull,
    -- col_lenght (table_name, column_name)
    col_length ('amigos', 'id') col_length_1_smallint,
    col_length ('amigos', 'nome') col_length_2_varchar,
    col_length ('amigos', 'qq nome q nao existe') col_length_3_NaoExisteVoltaNull,
    -- columnproperty (table_object_id, column_name, property_name_ver_help_no_site)
    columnproperty (object_id('amigos'), 'id', 'AllowsNull') columnproperty_col1_AllowNulls,
    columnproperty (object_id('amigos'), 'nome', 'AllowsNull') columnproperty_col2_AllowNulls,
    columnproperty (object_id('amigos'), 'id', 'IsIdentity') columnproperty_col1_IsIdentity,
    columnproperty (object_id('amigos'), 'nome', 'IsIdentity') columnproperty_col2_IsIdentity
 
/* Help sobre funções de metadados
https://docs.microsoft.com/en-us/sql/t-sql/functions/col-name-transact-sql
https://docs.microsoft.com/en-us/sql/t-sql/functions/col-length-transact-sql
https://docs.microsoft.com/en-us/sql/t-sql/functions/columnproperty-transact-sql
*/
```

## Comando para executar um arquivo de script SQL

Exemplo que fiz em meus estudos:

```
sqlcmd -S localhost -U sa -i arquivo.sql
```

Vai rodar todos os comandos dentro do arquivo.


Link útil de verdade:
https://learn.microsoft.com/pt-br/sql/ssms/scripting/sqlcmd-use-the-utility?view=sql-server-ver16

## Alterando configurações do servidor

### Exibir propriedades do servidor

Este exemplo consulta a exibição de catálogo sys.servers para retornar o nome (name) e a ID (server_id) do servidor atual e o nome do provedor OLE DB (provider) para conectar a um servidor vinculado.

```
USE AdventureWorks2012;   
GO  
SELECT name, server_id, provider  
FROM sys.servers ;   
GO
```

### Exibir propriedades de servidor usando a exibição do catálogo sys.configurations

Este exemplo consulta a exibição do catálogo sys.configurations para retornar informações sobre cada opção de configuração de servidor no servidor atual. O exemplo retorna o nome (name) e a descrição (description) da opção, o valor dela (value) e se ela é uma opção avançada (is_advanced).

```
SELECT name, description, value, is_advanced  
FROM sys.configurations;   
GO
```

### Alterar uma propriedade do servidor usando storage procedure

Este exemplo mostra como usar sp_configure para alterar a propriedade de um servidor. O exemplo altera o valor da opção fill factor para 100. O servidor deve ser reiniciado para que a alteração entre em vigor.

```
sp_configure 'show advanced options', 1;  
GO  
RECONFIGURE;  
GO  
sp_configure 'fill factor', 100;  
GO  
RECONFIGURE;  
GO
```

Mais informações: https://learn.microsoft.com/pt-br/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-ver16

