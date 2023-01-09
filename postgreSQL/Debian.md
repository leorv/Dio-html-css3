# Uso no Debian

Abaixo segue alguns comandos para fazer no terminal.

- pg_lsclusters

Lista todos os clusters PostgreSQL.

- pg_createcluster <version> <clustername>

Cria um novo cluster PostgreSQL.

- pg_dropcluster <version> <cluster>

Apaga um cluster PostgreSQL.

- pg_ctlcluster <version> <cluster> <action>

Start, Stop, Status, Restart de clusters PostgreSQL.

```
pg_ctlcluster 12 main start
```

## Criar um cluster com diretório específico para armazenar os arquivos

```
pg_createcluster -d /home/leonardo/postgresql/aula 12 aula --start
```

Se não passar o comando start, ele vai criar mas não vai iniciar o cluster.

## Mudar para o usuário postgres

```
su - postgres
```

Entrar no banco:

```
psql
```
