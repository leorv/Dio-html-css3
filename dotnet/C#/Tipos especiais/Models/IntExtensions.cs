using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Models
{
    public static class IntExtensions
    {
        // com o this estou extendendo o comportamento do inteiro.
        // todos os inteiros terão acesso a este método "EhPar".
        public static bool EhPar(this int numero)
        {
            return numero % 2 == 0;
        }
    }
}