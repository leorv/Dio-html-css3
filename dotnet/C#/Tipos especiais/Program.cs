using System;

using Models;

MeuArray<int> arrayInteiro = new MeuArray<int>();

arrayInteiro.AdicionarElemento(30);

System.Console.WriteLine(arrayInteiro[0]);

int num = 20;
bool par = false;

par = num.EhPar();

string msg = $"O número {num} é " + (par ? "par." : "ímpar.");

System.Console.WriteLine(msg);