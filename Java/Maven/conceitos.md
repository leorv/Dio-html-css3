# Maven

- Endereça como o software foi construído e suas dependências através do POM (Project Object Model).
- Facilita a compreensão do desenvolvedor.
- Fornecer informações de qualidade.

## Introdução

Criando um novo projeto

```
$ mvn archetype:generate -DarchetypeArtifactId=maven-archetype-quickstart
```

Nesse comando, archetype é o nome do plugin, generate é o nome do goal e maven-archetype-quickstart é o artifactId do archetype que estamos utilizando para criar o projeto. O Maven possui vários archetypes padrões para cada tipo de projeto e o quickstart é o archetype para os projetos mais simples.

Uma forma mais simples ainda de criar um projeto Maven é criando no modo batch (não-interativo). Para isso, execute o comando:

```
$ mvn archetype:generate -DgroupId=com.andgomes -DartifactId=simple-project -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

e aguarde o Maven concluir a operação. Ao criar um projeto no modo batch, estamos dizendo ao Maven para utilizar os valores padrão nos campos que não informamos. O valor do package, que será a estrutura dos pacotes do seu código-fonte, será o mesmo valor do groupId e o valor do version será 1.0-SNAPSHOT. Quando o interactiveMode é false, temos que informar obrigatoriamente o groupId e o artifactId no comando, caso contrário o Maven irá lançar um erro e o projeto não será criado.

## Compilar

> mvn compile

Todos os códigos java da aplicação são automaticamente compilados em inseridos na pasta target, ele fica na raiz do projeto. Lá teremos as classes geradas.

## Testar

> mvn test

## Empacotar

> mvn package

Vai criar o jar da aplicação, em target.

## Limpar

> mvn clean

A pasta target será apagada.

## Criando diferentes tipos de projetos

É possível com o Maven archetype, um template, e neste arquivo definimos versão de componentes, organização de pacotes e arquivos, etc.

Dessa forma conseguimos construir diversos templates ou arquétipos para diferentes finalidades.

Podemos buscar na web esses arquétipos também.

Pesquisar, por exemplo: `maven archetype list`.


