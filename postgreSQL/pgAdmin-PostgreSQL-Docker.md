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

Após isso, basta acessar a porta 15432: `localhost:15432`

## Simplificando este processo

O Docker Compose é a resposta para simplificar esse processo. Sua utilização dependerá primeiramente da criação de um arquivo chamado docker-compose.yml, o qual conterá as configurações para a geração de containers e networks.

```
version: '3'

services:
  teste-postgres-compose:
    image: postgres
    environment:
      POSTGRES_PASSWORD: "Postgres2023!"
    ports:
      - "15432:5432"
    volumes:
      - /home/leonardo/Documentos/Source/testes/PostgreSQL:/var/lib/postgresql/data 
    networks:
      - postgres-compose-network
      
  teste-pgadmin-compose:
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: "leonardo_vendramini@hotmail.com"
      PGADMIN_DEFAULT_PASSWORD: "PgAdmin2023!"
    ports:
      - "16543:80"
    depends_on:
      - teste-postgres-compose
    networks:
      - postgres-compose-network

networks: 
  postgres-compose-network:
    driver: bridge
```

- O serviço teste-postgres-compose se refere à instância do PostgreSQL a ser criada para acesso na porta 15432;
- Já o serviço teste-pgadmin-compose corresponde ao container que permitirá a execução do pgAdmin 4 (imagem dpage/pgadmin4) na porta 16543;
- Nas seções environment de teste-pgadmin-compose e teste-postgres-compose foram definidas configurações (variáveis de ambientes) necessárias para a geração dos 2 containers;
- As imagens referenciadas serão baixadas caso ainda não existam no ambiente a partir do qual o Docker Compose foi executado;
- Foi especificado ainda um volume para teste-postgres-compose, indicando assim o diretório no Ubuntu Desktop em que serão gravados os arquivos de dados (/home/renatogroffe/Desenvolvimento/Docker-Compose/PostgreSQL);
- Por meio da network postgres-compose-network acontecerá a comunicação entre os containers teste-pgadmin-compose e teste-postgres-compose.

O comando `docker-compose up -d` procederá com a criação da network e dos containers.

Com a instrução `docker network ls` podemos confirmar que a rede postgres-compose-network foi criada com sucesso (como ambientepostgresql_postgres-compose-network, resultado da concatenação com o nome do diretório em que se encontra o arquivo docker-compose.yml).

Já o comando `docker-compose ps` indicará que os containers do PostgreSQL (porta 15432) e do pgAdmin 4 (porta 16543) foram gerados corretamente e se encontram em execução.

## Testes

Um teste de acesso via browser ao pgAdmin 4 (http://localhost:16543) exibirá a tela inicial desta solução.

Fornecendo as credenciais de acesso que estavam no arquivo **docker-compose.yml** aparecerá então o painel de gerenciamento do pgAdmin 4.

Ao criar a conexão para acesso à instância do PostgreSQL levar em conta as seguintes considerações:

- Em Host name/address informar o nome do container que corresponde à instância do PostgreSQL (teste-postgres-compose);
    - De outra forma, pode-se também ver o ip do container: `docker container inspect xxxx`
- Em Port definir o valor 5432 (porta default de acesso ao container e disponível a partir da rede postgres-compose-network; não informar a porta em que o PostgreSQL foi mapeado no host);
- No atributo Username será informado o usuário default do PostgreSQL (postgres), bem como a senha correspondente em Password (Postgres2023!).


## Referências

PostgreSQL + Docker: executando uma instância e o pgAdmin 4 a partir de containers:
link: https://renatogroffe.medium.com/postgresql-docker-executando-uma-inst%C3%A2ncia-e-o-pgadmin-4-a-partir-de-containers-ad783e85b1a4