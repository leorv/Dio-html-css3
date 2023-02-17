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

- Operações intermediárias: retorna um Stream e a gente pode encadear, uma atrás da outra.
- Operações terminais: Podemos utilizar apenas uma. Retorna um objeto ou valor.

Considere:

```
List<String> numerosAleatorios = Arrays.asList("1", "0", "4", "7", "2", "3", "6", "7", "5");
```

### Imprimir todos

```
numerosAleatorios.stream().forEach(new Consumer<String>() {
    @Override
    public void accept(String s) {
        System.out.println(s);
    }
})
```

De uma forma melhor, usando expressão lambda:


```
numerosAleatorios.stream().forEach(s -> System.out.println(s));
```

Usando Method Reference:

```
numerosAleatorios.stream().forEach(System.out::println)
```

Porém, o lista já possui o forEach:

```
numerosAleatorios.forEach(System.out::println);
```

### Pegar os 5 primeiros e colocar em um Set

```
numerosAleatorios.stream()
    .limit(5).collect(Collectors.toSet())
    .forEach(System.out::println);
```

Mas cuidado, um Set não aceita repetição de elemento.

### Tranformar a lista de String em uma lista de números inteiros

```
numerosAleatorios.stream()
    .map(new Function<String, Integer>() {
        @Override
        public Integer apply(String s) {
            return Integer.parseInt(s);
        }
    });
```

Mas a gente não utiliza da forma que foi feito acima, né. Vamos melhorar:

```
numerosAleatorios.stream()
    .map(new Function<String, Integer>() {
        @Override
        public Integer apply(String s) {
            return Integer.parseInt(s);
        }
    });
```

Melhorando:

```
numerosAleatorios.stream()
    .map(s -> Integer.parseInt(s));
```

Ou:

```
numerosAleatorios.stream()
    .map(Integer::parseInt);
```

Entao:

```
numerosAleatorios.stream()
    .map(Integer::parseInt)
    .collect(Collectors.toList())
    .forEach(System.out::println);
```

Colocando dentro de uma variável:

```
List<Integer> collectList = numerosAleatorios.stream()
    .map(Integer::parseInt)
    .collect(Collectors.toList());
```

### Colocar os número pares e maiores que 2 em uma lista

Vamos mostrar primeiro usando a forma mais verbosa, porém isso não se usa em canto nenhum:

```
List<Integer> listParesMaioresQue2 = numerosAleatorios.stream()
    .map(Integer::parseInt)
    .filter(new Predicate<Integer>() {
        @Override
        public boolean test(Integer i) {
            if (i % 2 == 0 && i > 2) return true;
            return false;
        }
    }).collect(Collectors.toList());
```

Uma maneira melhor:

```
List<Integer> listParesMaioresQue2 = numerosAleatorios.stream()
    .map(Integer::parseInt)
    .filter(i -> i % 2 == 0 && i > 2)
    .collect(Collectors.toList());
```

### Mostrar a média dos números

```
numerosAleatorios.stream()
    .mapToInt(new ToIntFunction<String>() {
        @Override
        public int applyAsInt(String s) {
            return Integer.parseInt(s);
        }
    })
    .average()
    .ifPresent(new DoubleConsumer() {
        @Override
        public void accept(double v) {
            System.out.println(v);
        }
    });
```

Como sabemos, a melhor forma é:

```
numerosAleatorios.stream()
    .mapToInt(Integer::parseInt)
    .average()
    .ifPresent(System.out::println);
```

### Remover um valor

Usando List, não Stream.

```
numerosAleatoriosInteiros.removeIf(i -> i % 2 != 0);
```
