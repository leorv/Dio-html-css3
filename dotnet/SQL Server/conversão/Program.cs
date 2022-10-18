// Programa feito para colocar ; no final das linhas.


System.Console.WriteLine("Lendo o arquivo de texto...");
string[] linhas = File.ReadAllLines("texto.txt");

string novasLinhas = "";

System.Console.WriteLine("Inserindo as linhas com o ponto e vírgula...");
foreach(string linha in linhas) {

    novasLinhas += $"{linha};\n";
}

System.Console.WriteLine("Criando o novo arquivo e gravando as linhas...");

File.AppendAllText("convertido.txt", novasLinhas);

System.Console.WriteLine("As linhas do texto foram colocadas no arquivo convertido. OK.");