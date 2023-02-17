# Comandos administrativos

### Ubuntu

Abaixo segue alguns comandos para fazer no terminal.

- pg_lsclusters

Lista todos os clusters PostgreSQL.

- pg_createcluster <version> <clustername>

Cria um novo cluster PostgreSQL.

- pg_dropcluster <version> <cluster>

Apaga um cluster PostgreSQL.

- pg_ctlcluster <version> <cluster> <action>

Start, Stop, Status, Restart de clusters PostgreSQL.

### CentOS

- systemctl <action> <cluster>
	- systemctl start postgresql-11

(start, status, stop, restart)

### No Windows

Abrir o services. Identificar a linha em que se encontra o serviço do PostgreSQL.

Clicar com o botão direito e observar os comando que pode executar.

## binários do postgreSQL

Mas eu compilei o postgreSQL, ok:

Então se você compilou, você vai ter que administrar seu postgreSQL a partir dos binários dele.

- createdb
- createuser
- dropdb
- dropuser
- initdb
- pg_ctl (start, stop, restart, status)
- pg_basebackup
- pg_dump / pg_dumpall
- pg_restore
- psql
- reindexdb
- vacuumdb

Embora algumas bibliografias falam isso, dump não é backup. Ok.