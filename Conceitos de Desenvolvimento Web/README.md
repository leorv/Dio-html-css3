# Conceitos de Desenvolvimento Web

## O que é Internet

### História

#### No mundo

- 1969 EUA. Arpanet. Departamento de Defesa. Guerra fria. Interligar laboratórios. Primeiro e-mail.
- 1982 Universidades. Holanda. Dinamarca. Suécia.
- 1987 Liberado o uso comercial nos EUA.
- 1992 CERN cria a World Wide Web. Dados acessíveis a qualquer pessoa com acesso a internet.

#### No brasil

- 1988 FAPESP, UFRJ e LNCC (Laboratório Nacional de Computação Científica)
- 1994 Uso comercial, EMBRATEL.
- Conexão discada
- 2000 Banda Larga.

#### Fatos curiosos

- Qual foi o primeiro domínio criado? R = https://symbolics.com/
- E qual o primeiro blog? R = Em 1994, o cientista do MIT Media Lab, Claudio Pinhanez, criou um site chamado “Open Diary”.
- Qual foi a primeira compra feita na internet? R = Um CD de Sting (Ten Summoner's Tales). A transação ocorreu a 11 de agosto de 1994 e **foi feita** através de uma tecnologia que permitiu encriptar os dados do cartão de crédito.
- Qual o site mais antigo em atividade? R = https://nordu.net/ , o primeiro .com foi o symbolics.

## Redes

### Backbones

- Espinha dorsal
- Tem poucas espalhadas pelo mundo, uma estrutura parruda.
- São poucas estão espalhadas pelo mundo.

#### Provedores de acesso

- Cada país pode ter um ou mais provedores de acesso, que no caso aqui são as empresas telefônicas.
- Elas contratam o sinal do Backbone e repassam ao usuário final (você).

#### Provedores de Serviço

- Dial-up
- ADSL (banda-larga)
- Fibra ótica
- Rádio
- Satélite
- peer-to-peer
- Móvel

### TCP-IP

#### O que é?

Protocolos de comunicação de computadores em rede.

- Transmission Control Protocol
- Internet Protocol

Modelo de camadas.

#### 4 Camadas

1. Física, ex: Placa de rede.
2.  Rede, ex: IP.
3. Transporte, ex: TCP, UDP.
4. Aplicação, ex: FTP, SMTP, HTTP.

#### TCP x UDP

São duas formas de conexão. Isso seu modem e seu computador já tem e sabem de antemão, embora você possa fazer configurações no seu PC.

- UDP
	- Rápido
	- Não confiável (coisas podem se perder, não há confirmação de recebimento.)
	- Carro do ovo (não se sabe quem está recebendo a mensagem)
	- Livestream

- TCP
	- Voltado a conexão
	- Handshake (antes de estabelecer a conexão, ele "comprimenta" avisando pra saber.)
	- Integridade, ordem dos dados.
	- Aplicativos de mensagens de texto.

### Ports (portas)

São portas por onde sairão e chegarão dados.

 - 20: FTP
 - 22: SSH
 - 25: SMTP
 - 53: DNS
 - 80: HTTP
 - 443: HTTPS

### Modem

**Mo**dulator e **dem**odulator.

Modem é o hardware que converte dados em um formato que possa ser transmitido de um computador para outro e lido por outro.

Ele modula e demodula sinais.

### Roteador

É o aparelho que tem a função de distribuir internet para um ou mais dispositivos em uma rede.

Pode fazer a comunicação entre redes.

Pode ser burro. No sentido de que chega algo da internet, ele manda pra todos que estão conectados no roteador, o dono pega e todo mundo recebe, quem não for dono simplesmente descarta. Mas você pode imaginar o tamanho do tráfego que gera? Não seria melhor ele mandar o pacote apenas para quem pediu? Por isso que surgiu o **Switch**.

### Switch

Distribui internet para um ou mais dispositivos de uma rede.

Criado para ser inteligente.

### Dados móveis

#### SMS

Quanto custa para uma operadora de telefonia móvel enviar um SMS?

- Zero, 0, nada, vazio, null.

Então por que que ele cobram??? ¬¬

O celular, naturalmente, troca alguns bits com as torres de comunicação.

"Você está aí?" - "Estou" - "Você está aí?" - "Estou" - "Você está aí?" - "Estou" - "Você está aí?" - "Estou".

Quando mandamos um SMS, ele vai de carona nesses dados.

#### MMS

Transmissão de mensagens multimídia (áudio, vídeo), por meio de uma espécie de conexão de dados primitiva.

#### Conexões Móveis

- 1G - Analógico, 10 Kbps.
- 2G - Digital, GSM (Global System for Mobile Communication), 97 Kbps.
- GPRS - General Packet Radio Service, 2.5G, 32-80 Kbps - dados + voz.
- EDGE - Enhanced Data Rates for GSM Evolution, 2.75G, 128-236 Kbps.
- 3G - 7 Mbps.
- 4G - 22,1 Mbps.
- 5G - 10 Gbps.

### Wi-Fi

- IEEE 802.11: 2,4 GHz, 2 Mbps.
- IEEE 802.11a: 5 Ghz, 54 Mbps.
- IEEE 802.11b: 2,4 GHz, 11 Mbps (diminuição de interferências).
- IEEE 802.11g: 2,4 GHz, 54 Mbps.
- IEEE 802.11n: 2,4 GHz/5 GHz, 150-600 Mbps.

#### Segurança

- WEP, chaves de 64 bits e 128 bits.
- WPA, chave trocada periodicamente.
- WPA2, AES, IEEE 802.11i, mais segurança, mais processamento.

Talvez alguém diga para não usar o WPA2 porque é mais lento, porém com a tecnologia dos roteadores e das placas hoje em dia, isso não se justifica.

## Bluetooth

- Conexão ponto a ponto, não depende da internet para funcionar.

| Classe |Potência Máxima |Alcance |
|----------------|-------------------------------|-----------------------------|
| 1 | 100 mW | 100 m |
| 2 | 2,5 mW | 10 m |
| 3 | 1 mW | 1 m |

| Versão |Taxa de Transmissão |
|----------------|-------------------------------|
| 1.2 | 1 Mbps | 
| 2 + EDR | 3 Mbps | 
| 3.0 | 24 Mbps | 
| 4.0 | 25 Mbps | 
| 5.0 | 50 Mbps | 

## Browser

Para ver um site, é necessário um programa que interprete as linguagens de programação e as transforme em algo compreensível por um ser humano.

Identificam linguagens de programação, marcação e conteúdos multimídia.

Existem plugins e addons que ajudam na navegação.

Cache e cookies.