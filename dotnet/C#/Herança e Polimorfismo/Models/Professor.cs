using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Herança_e_Polimorfismo.Models
{
    public class Professor : Pessoa
    {
        public double Salario { get; set; }

        public override void Apresentar()
        {
            System.Console.WriteLine($"Olá, meu nome é {Nome}, tenho {Idade} anos, sou professor e ganho R$ {Salario}.");
        }
    }
}