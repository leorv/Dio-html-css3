# Set

- Não permite elementos duplicados.
- Não possui índice.

## Criar um conjunto

```
Set<Double> notas = new HashSet<>(Arrays.asList(7d, 8.5, 9.3, 7d, 0d, 3.6));
```

Se usar um print, não ficará na ordem que colocamos, é um HashSet.

## Exibir a posição de um elemento

Não temos o método get, para pegar um elemento em determinada posição.

Não trabalha com posições.

## Substituir um valor pelo outro

Não tem como fazer isso, só se for uma List.

## Conferir se um elemento está no conjunto

```
notas.contains(7d);
```

## Exibir o enésimo elemento adicionado

Não conseguimos. Não temos método para passar índice.

## Exibir o menor/maior elemento

Análogo ao lista, utilizamos o método *min*.

```
Collections.min(notas);
```

```
Collections.max(notas);
```

## Exibir a soma dos elementos

Usando Iterator.

```
Iterator<Double> iterator = notas.iterator();
Double soma = 0.0;

while(iterator.hasNext()) {
    Double next = iterator.next();
    soma += next;
}
```

Cuidado, ele não repete elementos. Então se for fazer média, etc, pode ser que dê errado se tiver tentado adicionar dois iguais.

## Remover um elemento

```
notas.remove(7d);
```

## Conjunto com ordem

Temos que usar o LinkedHashSet.

```
Set<Double> notas = new LinkedHashSet<>();
notas.add(7d);
notas.add(8.5);
notas.add(9.3);
notas.add(5d);
notas.add(7d); // Erro, adicionando elemento igual.
notas.add(0d);
notas.add(3.6);
```

## Exibir em ordem crescente

Utilizaremos a implementação TreeSet, que já organiza a ordem dos elementos pelo ordem natural.

```
Set<Double> notas = new TreeSet<>(notas2);
```

Se der um print vai imprimir na ordem crescente.

Se o notas2 não tivesse comparable, não ia dar certo. Como é Double, ele tem.

## Apagar um conjunto

```
notas.clear();
```

Para saber se está vazio:

```
notas.isEmpty();`
```

## Ordenar Conjuntos

Sobrescrever os métodos equals e hashCode nas classes. Isso é importante quando usarmos os conjuntos Hash.

Por exemplo, numa classe de séries:

```
@Override
public int hashCode() {
    return Objects.hash(nome, genero, tempoDoEpisodio);
}
```

```
Set<Serie> minhasSeries = new LinkedHashSet<>() {{
    add(new Serie(nome: "got", genero: "fantasia", tempoDoEpisodio: 60));
    add(new Serie(nome: "dark", genero: "drama", tempoDoEpisodio: 60));
    add(new Serie(nome: "that 70s show", genero: "comédia", tempoDoEpisodio: 25));
}}
```

Estará na ordem que foi inserido, poi é LinkedHashSet.

Se quiser na ordem natural, usar TreeSet.

```
Set<Serie> minhasSeries2 = new TreeSet<>(minhasSeries);
```

Para isso a classe Serie, tem que implementar Comparable, e implementar o compareTo.

