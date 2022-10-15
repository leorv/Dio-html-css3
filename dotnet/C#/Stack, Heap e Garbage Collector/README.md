# Stack, Heap e Garbage Collector

## O que é Stack e Heap

Stack e Heap são dois tipos de memória.

Dependendo do tipo da sua variável, ela vai para um lugar ou para outro.

A Stack armazena o nome da variável e o valor que ela representa. Fica pronto para usar.

A memória Heap armazena o próprio objeto de um tipo mais complexo. Armazena além de valores inteiros, outras coisas, por exemplo, nome, sobrenome, etc. Se o objeto for uma pessoa.

Quando usamos *new Pessoa()* ele vai ser criado na memória Stack, com o nome e uma referência (uma ligação) para o objeto representado na memória Heap.

Value Types => Armazenados na Stack

Objetos (Classes, Interfaces e etc) => Armazenados na Stack como referência e o objeto de verdade está na memória Heap.
