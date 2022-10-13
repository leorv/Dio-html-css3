// See https://aka.ms/new-console-template for more information



(int, string, string) tupla = (1, "Leonardo", "Ruoso Vendramini");

System.Console.WriteLine(tupla.Item1);

// Outra sintaxe de tupla:

ValueTuple<int, string, string, decimal> outraTupla = (1, "Leonardo", "Ruoso Vendramini", 1.80M);

var outroExemploDeTupla = Tuple.Create(1, "Leonardo", "Ruoso Vendramini", 1.78M);
// No exemplo acima ele reconhece o tipo de cada variável. Mas a maneira mais recomendada
// é a primeira, mais legível também.

System.Console.WriteLine(outraTupla.Item2);

// Descarte de informação, underline.
var (numero, nome, _) = (1, "Leonardo", "Ruoso Vendramini");

// if ternário
int num = 15;
bool ehPar = false;

ehPar = num % 2 == 0;

System.Console.WriteLine($"O número {num} é " + (ehPar? "par." : "ímpar."));