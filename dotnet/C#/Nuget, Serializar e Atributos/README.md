# Nuget, Serializar e Atributos no C#

## O que é um pacote?

É um conjunto de códigos úteis, que possibilita o compartilhamento e reúso.

Um pacote resolve um problema específica, por exemplo, um projeto que serve para enviar e-mails.

## Nuget

É um gerenciador de pacotes, que permite que desenvolvedores compartilhem seus códigos e bibliotecas.

## Atributos

Na conversão de deserialização,  pode acontecer do atributo ter um nome diferente.

Então, fazer o seguinte:

```
using Newtonsoft.Json;

namespace Models
{
    public class Venda
    {
        public int Id {get; set;}

        [JsonProperty("nome_produto")]
        public string Nome {get; set;}
    }
}
```
