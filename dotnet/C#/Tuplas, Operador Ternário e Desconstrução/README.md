# Tuplas, Operador Ternário e Desconstrução de um objeto em C#

## Exemplo de desconstrução

No método:

```
public void Deconstructor(out string nome, out string sobrenome) {
    nome = Nome;
    sobrenome = Sobrenome;
}
```

No programa, recebendo esse desconstrutor:

```
var (nome, sobrenome) = p1.Deconstructor();
```
