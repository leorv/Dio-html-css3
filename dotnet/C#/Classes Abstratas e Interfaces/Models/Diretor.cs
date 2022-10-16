using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Classes_Abstratas_e_Interfaces.Models
{
    public class Diretor : Professor
    {
        public Diretor(string nome) : base(nome)
        {
            
        }

        public override void Apresentar()
        {
            System.Console.WriteLine($"Olá, meu nome é {Nome}, sou diretor e meu salário é {Salario}.");
        }
    }
        
    
}