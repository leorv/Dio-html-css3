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
