using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Abstração_e_Encapsulamento.Models
{
    public class ContaCorrente
    {
        public int NumeroConta { get; set; }
        private decimal saldo { get; set; }

        public ContaCorrente(int NumeroConta, decimal Saldo)
        {
            this.NumeroConta = NumeroConta;
            this.saldo = Saldo;
        }

        public void Sacar(decimal valor)
        {
            if (saldo >= valor)
            {
                saldo -= valor;
                System.Console.WriteLine("Saque realizado com sucesso.");
            } else {
                System.Console.WriteLine("Valor desejado é maior que o saldo disponível.");
            }
        }

        public void ExibirSaldo() {
            System.Console.WriteLine("Seu saldo disponível é: " + saldo);
        }


    }
}