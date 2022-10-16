using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Classes_Abstratas_e_Interfaces.Models
{
    public abstract class Conta
    {
        protected decimal saldo;

        public abstract void Creditar(decimal valor);

        public void ExibirSaldo() {
            System.Console.WriteLine($"O seu saldo é: {saldo}");
        }
    }
}