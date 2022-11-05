# Streams

## Classe anônima

É uma classe que não recebeu um nome e é tanto declarada e instanciada em uma única instrução.

Você deve considerar o uso de uma classe anônima sempre que você precisar criar uma classe que será instanciada apenas uma vez.

Considere:

```
List<Gato> meusGatos = new ArrayList<>(){{
    add(new Gato(nome: "Jhon", idade: 12, cor: "Preto"));
    add(new Gato(nome: "Simba", idade: 2, cor: "Amarelo"));
    add(new Gato(nome: "Tchoncho", idade: 5, cor: "Café com leite"));
}};
```

```
meusGatos.sort(new ComparatorIdade());

class ComparatorIdade implements Comparator<Gato> {
    @Override
    public int compare(Gato g1, Gato g2) {
        return Integer.compare(g1.getIdade(), g2.getIdade());
    }
}
```

Usando classe anônima:

```
meusGatos.sort(new Comparator<Gato> {
    @Override
    public int compare(Gato g1, Gato g2) {
        return Integer.compare(g1.getIdade(), g2.getIdade());
    }
}); 
```

## Functional Interface

Qualquer interface com um SAM (Single Abstract Method) é uma interface funcional e sua implementação pode ser tratada como expressões lambda.

Exemplo, Function é uma interface funcional. No caso, tem o tipo Gato e o retorno String.

```
meusGatos.sort(Comparator.comparing(new Function<Gato, String>() {
    @Override
    public String apply(Gato gato) {
        return gato.getNome();
    }
})); 
```

## Lambda

Uma função lambda é uma função sem declaração, isto é, não é necessário colocar um nome, um tipo de retorno e o modificador de acesso. A ideia é que o método seja declarado no mesmo lugar em que será usado. As funções lambda em Java tem a sintaxe definida como (argumento) -> (corpo).

```
meusGatos.sort(Comparator.comparing((Gato gato) -> gato.getNome()));
```

## Reference Method

É um novo recurso do Java 8 que permite fazer referência a um método ou construtor de uma classe (de forma funcional) e assim indicar que ele deve ser utilizado num ponto específico do código, deixando-o mais simples e legível. Para utilizá-lo, basta informar uma classe ou referência seguida do símbolo "::" e o nome do método sem os parênteses no final.

```
meusGatos.sort(Comparator.comparing(Gato::getNome));
```

## Streams API

Traz uma nova opção para a manipulação de coleções em Java seguindo os princípios da programação funcional. Combinada com expressões lambda, ela proporciona uma forma diferente de lidar com conjuntos de elementos, oferecendo ao desenvolvedor uma maneira simples e concisa de escrever código que resulta em facilidade de manutenção e paralelização sem efeitos indesejados em tempo de execução.

