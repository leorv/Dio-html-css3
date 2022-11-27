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