# Collections

## Listas

### Criar uma lista

Criando uma lista, antes do Java 5:

```
List notas = new ArrayList();
```

Após o Java 5, criou-se o conceito de Generics, com o diamond operator <>

```
List<Double> notas = new ArrayList<>();
```

Outra forma, não tão recomendada, pois é recomendado programar para a interface e não para a implementação.

```
ArrayList<Double> notas = new ArrayList<>();
```

Passando com argumento:

```
List<Double> notas = new ArrayList<>(Arrays.asList(7d, 8.5d, 9.3d, 7d, 0d, 3.6d));
```

Este último não pode mais adicionar ou remover elementos.

Esta outra forma abaixo também torna a lista imutável, não podendo adicionar ou remover:

```
List<Double> notas = List.of(7d, 8.5d, 9.3d, 7d, 0d, 3.6d);
```

### Adicionar elementos em uma lista

Forma mais convencional:

```
notas.add(Elemento);
```

```
notas.add(4, Elemento); // colocar um elemento na posição 4
```

### Exibir a posição de um elemento

```
notas.indexOf(8.5d);
```

### Retornar um elemento pela sua posição

```
notas.get(2) // retorna o terceito elemento.
```

### Saber se a lista contém um elemento, retorna true ou false

```
notas.contains(8.5d);
```

### Exibir todos os elementos

```
for (Double nota : notas) System.out.println(nota);
```

### Exibir o menor elemento

Não existe método no List para isso, porém, como a lista é uma Collection, podemos usar essa interface.

```
Collections.min(notas);
```

### Exibir o maior elemento

```
Collections.max(notas);
```

### Exibir a soma de valores

Não existe método pra isso, mas podemos usar o método Iterator.

```
Iterator<Double> iterator = notas.iterator();
Double soma = 0d;
while(iterator.hasNext()) {
    Double next = iterator.next();
    soma += next;
}
```

### Quantidade de elementos na lista

```
notas.size()
```

### remover elemento da lista

Passando a posição ou o objeto

```
notas.remove(8.5d);
```

### Apagar toda a lista

```
notas.clear();
```

### Ordenar uma lista

De modo aleatório:

```
Collections.shuffle(lista);
```

Colocar em ordem natural, se for número, em ordem, se for string, alfabética.

A lista deve implementar a classe Comparable, e seu método compareTo.

```
@override
public int compareTo(Gato gato) {
    return this.getNome().compareToIgnoreCase(gato.getNome());
}
```

No caso acima, na classe Gato, vai ordenar por nome.

Se der 0, é porque esses gatos tem nomes iguais.
Se der 1, é porque 1 é o gato que to comparando, maior.
Se der -1, é porque ele é menor do que o que está sendo comparado.

Daí, quem faz essa comparação é o método sort. Só que ele recebe um Comparator, então temos o Collections, que também tem o método sort, que recebe uma list.

```
meusGatos.sort();
```

```
Collections.sort(meusGatos);
```

O método acima vai organizar conforme o Comparable, usando seu método compareTo.

### Ordenar utilizando a interface Comparator

Por exemplo, ordenar os gatos por idade.

Podemos usar o Collections, ou a própria lista, como mostrado um pouco mais abaixo.

```
Collections.sort(meusGatos, new ComparatorIdade());
```

```
class ComparatorIdade implements Comparator<Gato> {
    @Override
    public int compare(Gato g1, Gato g2) {
        return Integer.compare(g1.getIdade(), g2.getIdade());
    }
}
```

Usando a própria list:

```
meusGatos.sort(new ComparatorIdade());
```

Se fosse um comparator para as cores do gato, por exemplo, em String, ficaria a classe:

```
class ComparatorCor implements Comparator<Gato> {
    @Override
    public int compare(Gato g1, Gato g2) {
        return g1.getCor().compareToIgnoreCase(g2.getCor());
    }
}
```

Pode usar o sort da lista, igual o anterior. Pode usar o Collections também.

### Comparar com múltiplos parâmetros

Comparar gatos por nome, cor e idade.

```
class ComparatorNomeCorIdade implements Comparator<Gato> {
    @Override
    public int compare(Gato g1, Gato g2) {
        int nome = g1.getNome().compareToIgnoreCase(g2.getNome());
        if (nome != 0) return nome;

        int cor = g1.getCor().compareToIgnoreCase(g2.getCor());
        if (cor != 0) return cor;

        return Integer.compare(g1.getIdade(), g2.getIdade());
    }
}
```

Para usar:

```
meusGatos.sort(new ComparatorNomeCorIdade());
```

Ou:

```
Collections.sort(meusGatos, new ComparatorNomeCorIdade);
```