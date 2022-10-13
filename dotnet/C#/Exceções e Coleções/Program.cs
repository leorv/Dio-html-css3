// See https://aka.ms/new-console-template for more information
using System.Globalization;

try
{
    string[] linhas = File.ReadAllLines("Arquivos/arquivoLeitura.txt");

    foreach (string linha in linhas)
    {
        Console.WriteLine(linha);
    }

}
catch (FileNotFoundException e)
{
    System.Console.WriteLine($"Ocorreu um erro com a leitura do arquivo. Arquivo não encontrado. {e.Message}");
}
catch (DirectoryNotFoundException e)
{
    System.Console.WriteLine($"Ocorreu um erro com a leitura do arquivo. Diretório não encontrado. {e.Message}");
}
catch (Exception e)
{
    System.Console.WriteLine($"Ocorreu um exceção genérica. Mensagem: {e.Message}");
}
finally
{
    System.Console.WriteLine("Chegou até o fim.");
}

// Fila

Queue<int> fila = new Queue<int>();
fila.Enqueue(23);
fila.Enqueue(5);
fila.Enqueue(76);
fila.Enqueue(12);

foreach (int item in fila) {
    System.Console.WriteLine(item);
}

// removendo o primeiro elemento.
System.Console.WriteLine($"Removendo o primeiro elemento: {fila.Dequeue()}");

foreach (int item in fila)
{
    System.Console.WriteLine(item);
}

// Pilha
System.Console.WriteLine("Pilha:");
Stack<int> pilha = new Stack<int>();
pilha.Push(4);
pilha.Push(8);
pilha.Push(34);
pilha.Push(56);
pilha.Push(84);

foreach(int item in pilha) {
    System.Console.WriteLine(item);
}

System.Console.WriteLine($"Removendo o último elemento: {pilha.Pop()}");


foreach (int item in pilha)
{
    System.Console.WriteLine(item);
}

// Dictionary

Dictionary<string, string> estados = new Dictionary<string, string>();

estados.Add("SP", "São Paulo");
estados.Add("BA", "Bahia");
estados.Add("PR", "Paraná");

foreach(var item in estados) {
    System.Console.WriteLine($"Sigla: {item.Key}, Nome: {item.Value}");
}

System.Console.WriteLine("Removendo PR");
estados.Remove("PR");

foreach (var item in estados)
{
    System.Console.WriteLine($"Sigla: {item.Key}, Nome: {item.Value}");
}

// Alterando o valor:
// Somente o valor, não dá para alterar a chave.
System.Console.WriteLine("Alterando o valor de São Paulo:");
estados["SP"] = "Sãum Paulu";

foreach (var item in estados)
{
    System.Console.WriteLine($"Sigla: {item.Key}, Nome: {item.Value}");
}

string chave = "BA";
System.Console.WriteLine($"Verificando o elemento: {chave}");

if (estados.ContainsKey(chave)) {
    System.Console.WriteLine("Valor existente.");
} else {
    System.Console.WriteLine("Não existe, é seguro adicionar ele.");
}

