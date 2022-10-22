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

