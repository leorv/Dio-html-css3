# Configurações

## postgreSQL.conf

Arquivo onde estão definidas e armazenadas todas as configurações do servidor PostgreSQL.

Alguns parâmetros só podem ser alterados com uma reinicialização do banco de dados.

A view pg_settings, acessada por dentro do banco de dados, guarda todas as configurações atuais.

Este arquivo geralmente está localizado dentro do diretório de dados. Geralmente chamado PGDATA.

### View pg_settings

Ao acessar a view pg_settings, é possível visualizar todas as configurações atuais.

```
SELECT name, setting
FROM pg_settings;
```

Ou é possível usar o comando: `SHOW [parâmetro]`

### Localização do arquivo postgresql.conf

Por padrão, encontra-se dentro do diretório PGDATA definido no momento da inicialização do cluster de banco de dados.

No sistema operacional Ubuntu, se o PostgreSQL foi instalado a partir do repositório oficial, o local do arquivo postgresql.conf será diferente do diretório de dados.

`/etc/postgresql/[versão]/[nome do cluster]/postgresql.conf`

## Algumas configurações interessantes

### Configurações de conexão

- LISTEN_ADDRESSES

Endereço(s) TCP/IP das interfaces que o servidor PostgreSQL vai escuar/liberar conexões.

Não recomendados colocar asterisco *. Qualquer endereço poderia acessar seu banco de dados.

- PORT

A porta TCP que o servidor PostgreSQL vai ouvir. O padrão é 5432. Pode mudar este valor.

- MAX_CONNEXTIONS

Número máximo de conexões simultâneas no servidor PostgreSQL.

- SUPERUSER_RESERVED_CONNECTIONS

Número de conexões (slots) reservados para conexões ao banco de dados de super usuários.

- AUTHENTICATION_TIMEOUT

Tempo máximo em segundos para o cliente conseguir uma conexão com o servidor.

- PASSWORD_ENCRYPTION

Algoritmo de criptografia das senhas dos novos usuários criados no banco de dados.

- SSL

Habilita a conexão criptografada por SSL. (Somente se o PostgreSQL foi compilado com suporte SSL)

- SHARED_BUFFERS

Tamanho da memória compartilhada do servidor PostgreSQL para cache/buffer de tabelas, índices e demais relações.

Muitos recomendam que o valor básico desse parâmetro seja 25% da memória. Mas cuidado, quando colocamos muita memória podemos ter problema, o mesmo se colocamos pouca, então, equilíbrio.

- WORK_MEM

Tamanho da memória para operações de agrupamento e ordenação (ORDER BY, DISTINCT, MERGE JOINS).

- MAINTENANCE_WORK_MEM

Tamanho da memória para operações como VACCUM, INDEX, ALTER TABLE.

Quando houver um objeto muito grande, que demande mais memória, é recomendado que altere este parâmetro, faça a operação, e depois volte ele.

## O arquivo pg_hba.conf

Arquivo responsável pelo controle de autenticação dos usuários no servidor PostgreSQL.

### Métodos de autenticação

- TRUST (conexão sem requisição de senha)
- REJECT (rejeitar conexões)
- MD5 (criptografia md5)
- PASSWORD (senha sem criptografia)
- GSS (generic security service application program interface)
- SSPI (secutiry support provider interface - somente para Windows)
- KRB5 (kerberos V5)
- IDENT (utiliza o usuário do sistema operacional do cliente via ident server)
- PEER (utiliza o usuário do sistema operacional do cliente)
- LDAP (ldap server)
- RADIUS (radius server)
- CERT (autenticação via certificado ssl do cliente)
- PAM (pluggable authentication modules. O usuário precisa estar no banco de dados)

Um exemplo que a gente encontra muito na internet, mas fica o alerta, NÃO FAZER ISSO EM PRODUÇÃO, APENAS TESTES, OK:

`host	all	all	0.0.0.0/0	md5`

Assim estaríamos liberando o acesso para qualquer um, desde que tenha uma senha. Isso é uma falha de segurança. Sempre colocar o IP do cliente, da aplicação, etc. De preferência /32.

## O arquivo pg_ident.conf

Arquivo responsável por mapear os usuários do sistema operacional com os usuários do banco de dados.

Localizado no diretório de dados PGDATA de sua instalação.

A opção ident deve ser utilizada no arquivo pg_hba.conf

## Comandos administrativos

### Ubuntu

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

## Cluster

Coleção de bancos de dados que compartilham as mesmas configurações (arquivos de configuração) do PostgreSQL e do sistema operacional (porta, listen_address, etc).

## Banco de dados (database)

Conjunto de schemas com seus objetos/relações (tabelas, funções, views, etc).

Cuidado, no mySQL, schema é o mesmo que database, no PostgreSQL, não.

Dentro de um database, eu posso ter mais de um schema.
