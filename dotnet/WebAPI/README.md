# Trabalhando com o Entity Framework Core

## Criando um projeto de Web API

```
dotnet new webapi
```

## Rodando com o watch

```
dotnet watch run
```

## Instalando pacotes para trabalhar com o EF Core

Vamos executar comando do EF diretamente do console. É preciso instalar ela apenas uma vez.

Se for trabalhar em outro projeto, não precisará executar este comando novamente.

```
dotnet tool install --global dotnet-ef
```

Resultado:

```
Você pode invocar a ferramenta usando o comando a seguir: dotnet-ef
A ferramenta 'dotnet-ef' (versão '6.0.10') foi instalada com êxito.
```

Agora instalando o pacote:

```
dotnet add package Microsoft.EntityFrameworkCore.Design
```

Diferente da ferramente anterior, este pacote é instalado apenas em nível de projeto.
Ou seja, em todo projeto que precisar dele, terá que instalar.

Como vamos trabalhar com o SQL Server:

```
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

## Contexto

É uma classe que centraliza todas as informações em determinado banco de dados.

## Conexão

Tem que cadastrar a conexão.

- appsettings.Development.json = apenas para testes.
- appsettigns.json = produção.

Em ambiente Windows:

```
"ConnectionStrings": {
"ConexaoPadrao": "Server=localhost\\sqlexpress; Initial Catalog=Agenda; Integrated Security=True"
```

Em ambiente Linux:
No ambiente Debian que eu uso, vai funcionar o abaixo. Porém, acredito que em outros ambientes também, inclusive o que deve estar usando.

Um detalhe é que a segurança integrada não funcionará no Linux (pelo menos sem configuração, a autenticação Kerberos é suportada), porque está relacionada à autorização do Active Directory / NTML.

Portanto, use a string de conexão de autorização de nome de usuário padrão. Faça da seguinte maneira:

```
"ConnectionStrings": {
        "ConexaoPadrao": "Server=localhost; Database=Agenda; User Id=sa; Password=SuaSenha"
  }
```

Tenha certeza também de que em outro terminal esteja com uma instância do SQL Server aberta. Pode saber também os dados dela com o comando:

```
SELECT @@servername, @@servicename;
GO
```

## Migrations

É um mapeamento que o EF Core faz para transformar as entidades em tabelas no banco de dados.

```
dotnet-ef migrations add CriacaoTabelaContato
```

Este comando vai criar dois métodos, o Up e o Down.

- Up -> aplicar no banco de dados
- Down -> fazer um rolllback

Aplicando o migration:

```
dotnet ef database update
```

Saída:

```
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 6.0.10 initialized 'AgendaContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer:6.0.10' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (428ms) [Parameters=[], CommandType='Text', CommandTimeout='60']
      CREATE DATABASE [Agenda];
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (148ms) [Parameters=[], CommandType='Text', CommandTimeout='60']
      IF SERVERPROPERTY('EngineEdition') <> 5
      BEGIN
          ALTER DATABASE [Agenda] SET READ_COMMITTED_SNAPSHOT ON;
      END;
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (11ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT 1
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (18ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      CREATE TABLE [__EFMigrationsHistory] (
          [MigrationId] nvarchar(150) NOT NULL,
          [ProductVersion] nvarchar(32) NOT NULL,
          CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
      );
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT 1
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (24ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT OBJECT_ID(N'[__EFMigrationsHistory]');
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (5ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT [MigrationId], [ProductVersion]
      FROM [__EFMigrationsHistory]
      ORDER BY [MigrationId];
info: Microsoft.EntityFrameworkCore.Migrations[20402]
      Applying migration '20221022031228_CriacaoTabelaContato'.
Applying migration '20221022031228_CriacaoTabelaContato'.
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (6ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      CREATE TABLE [Contatos] (
          [Id] int NOT NULL IDENTITY,
          [Nome] nvarchar(max) NULL,
          [Telefone] nvarchar(max) NULL,
          [Ativo] bit NOT NULL,
          CONSTRAINT [PK_Contatos] PRIMARY KEY ([Id])
      );
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (2ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
      VALUES (N'20221022031228_CriacaoTabelaContato', N'6.0.10');
Done.
```

Então, no banco de dados você já terá a tabela criada.