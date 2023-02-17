# Map

Trabalha com chave-valor.

## Criar um Dicionário

```
Map<String, Double> carros = new HashMap<>(){{
    put("gol", 14.4);
    put("celta", 11.3);
    put("vectra", 14.1);
    put("pajero", 7.1);
}}
```

A forma que a gente inseriu não é a forma que é armazenada. Porque é um HashMap.

## Substituindo um elemento

```
carros.put(k: "gol", v: 15.2);
```

## Conferir se uma chave existe

```
carros.containsKey("tucson");
```

## Exibir a enésima chave

Não temos esse método no Map.

## Exibir as chaves

Retorna um Set.

```
carros.keySet();
```

## Exibir os valores

Retorna um Collection.

```
carros.values();
```

## Maior valor

```
Collection.max(carros.values());
```

## A chave que possui o maior valor

Exemplo, o consumo mais eficiente, qual o carro que o possui.

Lembrando que neste caso pode existir um modelo que possui o mesmo consumo, então poderia adicionar em uma lista esses modelos, ao invés de uma String.

```
Double consumoMaisEficiente = Collection.max(carros.values());

Set<Map.entrySet<String, Double>> entries = carros.entrySet();
String modeloMaisEficiente = "";

for (Map.entrySet<String, Double> entry : entries) {
    if (entry.getValue().equals(consumoMaisEficiente)) {
        modeloMaisEficiente = entry.getKey();
    }
}
```

## Exibir a soma dos valores

Usaremos o iterator.

```
Iterator<Double> iterator = carros.values().iterator();
Double soma = 0d;

while (iterator.hasNext()) {
    soma += iterator.next();
}
```

A mesma lógica pode ser usada para também remover um valor específico, através de um if dentro do while.

Usando iterator.remove().

```
Iterator<Double> iterator = carros.values().iterator();

while (iterator.hasNext()) {
    if (iterator.next().equals(15.6)) {
        iterator.remove();
    }
}
```

## Exibir as chaves na ordem que foram informadas

Teremos que utilizar a LinkedHashMap neste caso.

```
Map<String, Double> carros = new LinkedHashMap<>(){{
    put("gol", 14.4);
    put("celta", 11.3);
    put("vectra", 14.1);
    put("pajero", 7.1);
}}
```

## Exibir o dicionário ordenado pela chave

Quem trabalha assim é o TreeMap. Eficiência O log(n).

```
Map<String, Double> carros2 = new TreeMap<>(carros);
```

## Apagar o dicionário

```
carros.clear()
```

## Conferir se está vazio

```
carros.isEmpty();
```

## Ordenação - Maps

### Ordem aleatória

Simplesmente usar HashMap.

### Ordem de inserção

Usar LinkedHashMap.

### Ordem natural

De acordo com as chaves, usar TreeMap.

### Ordem natural do valor

Temos que usar o TreeSet e passar um Comparator pra ele.

```
Set<Map.entry<String, Livro>> meusLivros = new TreeSet(new ComparatorNome());

```

Classe comparator:

```
class ComparatorNome implements Comparator<Map.entry<String, Livro>> {
    @Override
    public int compare(Map.Entry<String, Livro> l1, Map.Entry<String, Livro> l2) {
        return l1.getValue().getNome().compareToIgnoreCase(l2.getValue().getNome());
    }
}
```

