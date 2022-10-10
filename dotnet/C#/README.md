# Anotações

## Arquivos de projeto

*.csproj*: Contém informações referente a um projeto (build, debug, versão).

*.sln*: Contém informações que carregam um agrupamento de projetos. Serve para melhorar a organização dos meus projetos.

Exemplo:

```
dotnet new sln -n "Fundamentos"
```

## Criar o projeto em outra versão do dotnet

Vamo supor que tenhamos instalada a versão 6 e a 5, se formos criar um novo projeto, ele usará por padrão a 6, mais nova.

Então, para criar um novo projeto com o dotnet 5, faríamos, por exemplo:

```
dotnet new console --framework net5.0
```
