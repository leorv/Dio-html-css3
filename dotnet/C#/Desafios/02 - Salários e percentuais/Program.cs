using System;  

public class Program { 

  public static void Main(string[] args) {  

    double salario = 0.00; 
    double reajuste = 0.00; 
    double novoSalario = 0.00; 
    double percentual = 0.00; 
  
    salario = Convert.ToDouble(Console.ReadLine()); 
   
    if(salario < 0) { 
      return; 

    } else if (salario <= 400) { 
      percentual = 0.15; 
      reajuste =  percentual * salario; 
      novoSalario = salario + reajuste; 

    } else if (salario <= 800.00) { 
      percentual = 0.12; 
      reajuste =  percentual * salario;
      novoSalario = reajuste + salario; 

    } else if ( salario <=  1200.00) { 
      percentual = 0.10; 
      reajuste =  percentual * salario;
      novoSalario = reajuste + salario; 

    } else if ( salario <= 2000.00) { 
      percentual =  0.07; 
      reajuste =  percentual * salario;
      novoSalario = reajuste + salario; 

    } else { 
      percentual = 0.04; 
      reajuste =  percentual * salario;
      novoSalario = reajuste + salario; 

    } 

    Console.WriteLine("Novo salario: {0:0.00}", novoSalario); 
    Console.WriteLine("Reajuste ganho: {0:0.00}", reajuste); 
    Console.WriteLine("Em percentual: {0} %", percentual * 100); 

  } 
}