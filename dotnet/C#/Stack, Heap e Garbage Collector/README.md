# Stack, Heap e Garbage Collector

## O que é Stack e Heap

Stack e Heap são dois tipos de memória.

Dependendo do tipo da sua variável, ela vai para um lugar ou para outro.

A Stack armazena o nome da variável e o valor que ela representa. Fica pronto para usar.

A memória Heap armazena o próprio objeto de um tipo mais complexo. Armazena além de valores inteiros, outras coisas, por exemplo, nome, sobrenome, etc. Se o objeto for uma pessoa.

Quando usamos *new Pessoa()* ele vai ser criado na memória Stack, com o nome e uma referência (uma ligação) para o objeto representado na memória Heap.

Value Types => Armazenados na Stack

Objetos (Classes, Interfaces e etc) => Armazenados na Stack como referência e o objeto de verdade está na memória Heap.


## Limpeza de memória

Vamos declarando as variáveis, mas chega um momento que o programa deve fazer uma limpeza.

O C# tem uma maneira inteligente de gerenciar tudo isso.

Quando termina um método, o C# mata as variáveis da Stack, de maneira LIFO.

Já quem vai limpar a memória Heap é o Garbage Collector (GC). Ele vai limpar todos os dados da memória Heap que não tem uma referência para uma variável em uso.

A memória Heap não possui ordem de remoção e armazenamento, ela é dinâmica.

A Stack é estática, nesse sentido de armazenamento.

## Atribuição de tipos

### Para tipos de valor

```
void Metodo() {
    int a = 5;
    int b = a;
}
```

Na Stack fica:

- b = 5
- a = 5

### Para tipos de referência

```
void Metodo() {
    // Linha 1
    Pessoa p1 = new Pessoa("Leonardo", "Ruoso Vendramini");

    // Linha 2
    Pessoa p2 = p1;
    p2.Nome = "Eduardo";
}
```

**Stack**

- p2 (ref01)
- p1 (ref01)

**Heap**

- Pessoa (Objeto)

p1 e p2 mudarão para "Eduardo", o nome. Pois está apontando para uma referência.