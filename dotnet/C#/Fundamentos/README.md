# Fundamentos

## Arquivos de projeto

*.csproj*: Contém informações referente a um projeto (build, debug, versão).

*.sln*: Contém informações que carregam um agrupamento de projetos. Serve para melhorar a organização dos meus projetos.

Exemplo:

```
dotnet new sln -n "Fundamentos"
```

## Criar o projeto em outra versão do dotnet

Vamo supor que tenhamos instalada a versão 6 e a 5, se formos criar um novo projeto, ele usará por padrão a 6, mais nova.

Então, para criar um novo projeto com o dotnet 5, faríamos, por exemplo:

```
dotnet new console --framework net5.0
```

## Strings

Recebendo uma string e separando com um split para um array.

```
string[] valores = Console.ReadLine().Split(' ');
```

### Concatenação de strings

Por interpolação de strings:

```
Console.WriteLine($"Alunos do curso de: {Nome}");
```

### Valor monetário

```
decimal valor = 82.40M;
Console.WriteLine($"{valor:C}");
```

Se colocar C1, por exemplo, ele vai considerar com uma casa decimal.

Para porcentagem, passar a letra P, dentro do ToString("P")

### Formatando data

```
Console.WriteLine(data.ToString("dd/MM/yyyy HH:mm"));
```

A data tem alguns métodos também:

```
data.ToShortTimeString()
```

#### Recebendo uma string e transformando em data

```
DateTime.Parse("17/04/2022 18:00")
```

com try parse exact:

```
DateTime.TryParseExact(dataString, "yyyy-MM-dd HH:mm", CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime data);
Console.WriteLine(data);
```

Esse try parse exact retorna um booleano, ou seja, dá pra gente validar também se ele conseguiu converter ou não com um if else.

É preferível usar esse try parse, por conta do sucesso ou não da conversão.


### Alterando a localização do código

```
using System.Globalization;

CultureInfo.DefaultThreadCurrentCulture = new CultureInfo("en-US");
```

Uma específica:

```
Console.WriteLine(valor.ToString("C", CultureInfo.CreateSpecificCulture("en-US")));
```

## Arrays

Como declarar:

```
int[] array = new int[4];
int[] array = new int[] {42, 75, 74, 61};
string[] nomes = {"jan", "fev"};
```

Os elementos do array:

```
int elemento = array[0];
array[0] = 40;
```

### Percorrendo o array

```
for(int i; array.length; i++){

}
```

```
foreach(int value in array) {

}
```

### Redimensionar um array

Usar a classe do sistema "Array".

```
Array.Resize(array, 10);
```

O que acontece é que o resize acaba criando um novo array e copiando esses elementos existentes pra lá.

Para copiar um array:

```
Array.Copy
```

## Lista

Não precisamos declarar a capacidade máxima, ela vai crescendo conforme vamos adicionando elementos.

```
List<string> lista = new List<string>();

lista.Add("SP");
```

## Comentários e documentação

//

/* comentário */

<summary>

## Encapsulamento

```
public class Pessoa {
    private string _nome;
    public string Nome {
        get => _nome.ToUpper();
        // get {
        //    return _nome.ToUpper();
        // } 
        set {
            if (value == "") {
                throw new ArgumentException("O nome não pode ser vazio.");
            }
            _nome = value;
        }
    }

    public string SobreNome { get; set;}

    private int _idade;
    public int Idade {
        get => _dade;
        set {
            if (value < 0) {
                throw new ArgumentException("A idade deve ser maior que zero");
            }

            _idade = value;
        }
    }

    public string NomeCompleto => $"{Nome} {Sobrenome}".ToUpper();
}
```