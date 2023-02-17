# PostgreSQL

- O que são dados

São valores brutos, registros soltos, que são recolhidos e armazenados sem nenhum tratamento ou alteração.

- O que são informações

Estruturação dos dados, organização de dados, que gera sentido e valor, sentido dos dados, material do conhecimento.

### Modelo relacional

Modelo mais comum, que classifica e organiza as informações em linhas e colunas.

Linhas = tuplas

### Tabelas

Conjuntos de dados dispostos em colunas e linhas referentes a um objetivo em comum.

As colunas são consideradas como "campos" da tabela, como atributos da tabela.

As linhas também são chamadas de tuplas, que é onde estão contidos os valores da tabela.

### O que pode ser definido por uma tabela

- Coisas tangíveis
    - Elementos físicos.
- Funções
    - Perfis de usuários, status de compra.
- Eventos ou ocorrências
    - Produtos de um pedido, histórico de dados.

### Colunas importantes

#### Chave primária | PK | Primary Key

Conjunto de um ou mais campos que nunca se repetem, identidade da tabela. São utilizados como índice de referência na criação de relacionamentos entre tabelas.

#### Chave estrangeira | FK | Foreign Key

Valor de referência a uma PK de outra tabela, para criar um relacionamento.

## SGBD

Conjunto de softwares responsáveis pelo gerenciamento de um banco de dados.

## O que é o PostgreSQL

Sistema de gerenciamento de banco de dados objeto relacional.

Teve início no Departamento de Ciência da Computação na Universidade da Califórnia em Berkeley em 1986.

É OpenSource.

## Arquitetura do PostgreSQL

Arquitetura multiprocessos.

- autenticação.
- conexões.

Serviço PostgreSQL

- postmaster
- childs
- memória > shared_buffers, wal_buffers, clog_buffers, lock_space.
- processos de escrita em disco

Modelo cliente-servidor.

## Características do PostgreSQL

- OpenSource;
- Point in time recovery;
- Linguagem procedural com suporte a várias linguagens de programação (perl, python, etc.)
- Views, functions, procedures, triggers.
- Consultas complexas e Common table expressions (CTE)
- Suporte a dados geográficos (PostGIS)
- Controle de concorrência multi-versão.

## Cluster

Coleção de bancos de dados que compartilham as mesmas configurações (arquivos de configuração) do PostgreSQL e do sistema operacional (porta, listen_address, etc).

## Banco de dados (database)

Conjunto de schemas com seus objetos/relações (tabelas, funções, views, etc).

Cuidado, no mySQL, schema é o mesmo que database, no PostgreSQL, não.

Dentro de um database, eu posso ter mais de um schema.

## Schema

Conjunto de objetos/relações (tabelas, funções, views, etc.).

Outros bancos interpretam o Schema como um banco de dados, mas no postgres é diferente.

Por exemplo, dentro de um Cluster, temos vários bancos de dados, e em um determinado banco de dados, digamos, o DB4, temos dois esquemas, um SCHEMA=PUBLIC e um outro sendo SCHEMA=PRODUCT. Cada um com suas tabelas e views.

