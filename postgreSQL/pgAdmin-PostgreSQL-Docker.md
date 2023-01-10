# PostgreSQL + Docker: executando uma instância e o pgAdmin 4 a partir de containers

Este tipo de prática viabiliza a montagem com velocidade de ambientes de Desenvolvimento e Testes, além de permitir a execução lado a lado de diferentes versões de um SGBD.

O que talvez diferencie o PostgreSQL de outras soluções está na possibilidade de execução de sua ferramenta gráfica de administração a partir de um container. O pgAdmin 4 conta com uma imagem Docker baseada em Linux e que pode ser baixada gratuitamente, facilitando assim a sua instalação e utilização em ambientes Windows, Linux e macOS.

## Obtendo as imagens necessárias

As imagens se encontram no Docker Hub, podendo ser baixadas através do comando docker pull:

```
docker pull postgres

docker pull dpage/pgadmin4
```

Para verificar: `docker images`

## Criando uma network para execução dos containers

Para tornarmos possível o uso integrado de uma instância do PostgreSQL com o pgAdmin 4 criaremos uma rede chamada postgres-network, com isto acontecendo através da seguinte instrução:

```
docker network create --driver bridge postgres-network

docker network ls
```

## Criando um container para executar uma instância do PostgreSQL e PgAdmin

```
docker container run --name teste-postgres --network=postgres-network -e "POSTGRES_PASSWORD=Postgres2023!" -p 5432:5432 -v /home/leonardo/Documentos/Source/testes/PostgreSQL:/var/lib/postgresql/data -d postgres

docker run --name teste-pgadmin --network=postgres-network -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=leonardo_vendramini@hotmail.com" -e "PGADMIN_DEFAULT_PASSWORD=PgAdmin2023!" -d dpage/pgadmin4
```

## Referências

PostgreSQL + Docker: executando uma instância e o pgAdmin 4 a partir de containers:
link: https://renatogroffe.medium.com/postgresql-docker-executando-uma-inst%C3%A2ncia-e-o-pgadmin-4-a-partir-de-containers-ad783e85b1a4