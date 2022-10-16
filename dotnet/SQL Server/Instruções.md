# Instalar o Microsoft SQL Server no Debian e no Ubuntu

O Microsoft SQL Server, conhecido e utilizado por diversas empresas nacionais e internacionais, é um sistema gerenciador de banco de dados relacional (SGBD) desenvolvido inicialmente pela Sybase em parceria com a Microsoft, sendo que esta parceria durou até 1994, com o lançamento da versão para Windows NT, desde então a apenas Microsoft mantém a manutenção deste banco de dados.

Existem diversas edições do Microsoft SQL Server, destinadas a públicos diferentes, com diferentes cargas de trabalho, ou seja, variando de pequenas aplicações que armazenam e recuperam dados no mesmo computador, até milhões de usuários e computadores, que acessam grandes quantidades de dados a partir da Internet ao mesmo tempo).

Suas linguagens de consulta primárias são Transact-SQL (T-SQL) e ANSI SQL.

Mantido pela Microsoft há anos, é um dos principais SGBDs relacionais do mercado, junto com o Oracle, MySQL e o PostgreSQL. Distribuído em diferentes edições e com várias ferramentas integradas, esse banco é capaz de atender às demandas desde os mais simples negócios até os mais complexos cenários que lidam com grande volume de dados.

Dentre suas diversas funcionalidades, o SQL Server permite a criação de tabelas relacionadas, evitando a necessidade de armazenar dados redundantes em vários locais dentro de um banco de dados. Além disso, o modelo relacional também fornece integridade referencial e outras restrições de integridade para manter a precisão dos dados. O SQL Server suporta transações, é aderente e suporta os princípios de atomicidade, consistência, isolamento e durabilidade.

Embora muitos não saibam, o Microsoft SQL Server é oficialmente suportado no Linux. Existem explicações relativas à instalação no Ubuntu, **mas a Microsoft não publicou as instruções sobre a instalação no Debian, embora possamos fazer as duas instalações da mesma maneira.**

Como pré-requisitos, é necessário você utilizar o Debian 9 ou superior, ou o Ubuntu 20.04 ou superior, além de pelo menos 2 GB de memória RAM no equipamento.

## Instalar o Microsoft SQL Server

Para configurar o SQL Server no Debian ou Ubuntu, execute os seguintes comandos em um terminal, para conseguir instalar o pacote mssql-server.

Importe as chaves GPG do repositório público:

```
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
```

Registre o repositório do Ubuntu do Microsoft SQL Server para o SQL Server 2019:

```
sudo add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/20.04/mssql-server-2019.list)"
```

Execute os comandos a seguir para instalar o Microsoft SQL Server:

```
sudo apt-get update
sudo apt-get install -y mssql-server
```

Após a conclusão da instalação do pacote, execute a instalação de mssql-conf e siga os prompts para definir a senha SA e escolher sua edição.

```
sudo /opt/mssql/bin/mssql-conf setup
```

Após concluir a configuração, verifique se o serviço está em execução:

```
systemctl status mssql-server --no-pager
```

*Caso você queira se conectar remotamente, provavelmente será preciso abrir a porta 1433 TCP do SQL Server no seu firewall.*

Pronto! O SQL Server 2019 está em execução no seu computador Debian ou Ubuntu, já podendo ser utilizado!

## Instalar as ferramentas de linha de comando do Microsoft SQL Server

Para trabalhar com este banco de dados, é necessário que você tenha uma ferramenta para executar instruções no Microsoft SQL Server. As próximas etapas desse material demonstram como instalar as ferramentas de linha de comando do SQL Server, a sqlcmd e bcp, no Debian e no Ubuntu.

Iniciaremos instalando o cURL.

```
sudo apt-get update
sudo apt install curl
```

Devemos importar as chaves GPG do repositório público do Microsoft.

```
curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
```

Agora registrar o repositório do Microsoft Ubuntu (no Debian ou no Ubuntu).

```
curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list | sudo tee /etc/apt/sources.list.d/msprod.list
```

Agora, vamos atualizar a lista de fontes e execute o comando de instalação com o pacote do desenvolvedor do unixODBC.

```
sudo apt-get update
sudo apt-get install mssql-tools unixodbc-dev
```

Iremos adicionar o diretório /opt/mssql-tools/bin/ à variável PATH, para tornarmos os comandos sqlcmd e bcp acessíveis no shell. Modifique os arquivos ~/.bash_profile e ~/.bashrc com estes comandos:

```
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bash_profile
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc
```

## Conectar-se ao Microsoft SQL Server de forma local

Com as próximas etapas, que utilizam o sqlcmd recém instalado, você irá conectar-se à nova instância do SQL Server.

Devemos utilizar o sqlcmd com os parâmetros para o nome do SQL Server (-S), o nome de usuário (-U) e a senha (-P), de forma local. O nome de usuário é "SA" e a senha é a mesma fornecida para a conta SA durante sua instalação.

```
sqlcmd -S localhost -U SA -P '<SuaSenha>'
```

Neste momento, caso sua conexão funcione, será levado para um prompt de comando:

```
sqlcmd: 1>
```

## Conclusões

A utilização do Microsoft SQL Server no Linux atende a diversas necessidades da atualidade, em ambientes de desenvolvimento, homologação e produção, ao lado de outros SGBD líderes do mercado.

Caso você tenha experiências ao utilizar esse banco de dados no Linux, nos conte para divulgarmos ainda mais esse tipo de conhecimento!

## Post original

https://www.vivaolinux.com.br/artigo/Instalar-o-Microsoft-SQL-Server-no-Debian-e-no-Ubuntu