using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Classes_Abstratas_e_Interfaces.Models
{
    public class Aluno : Pessoa
    {
        public double Nota { get; set; }

        public Aluno(string nome) : base(nome)
        {

        }

        public override void Apresentar()
        {
            System.Console.WriteLine($"Olá, meu nome é {Nome}, tenho {Idade} anos e sou um aluno nota {Nota}.");
        }
    }
}