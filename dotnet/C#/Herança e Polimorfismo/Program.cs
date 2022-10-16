using Herança_e_Polimorfismo.Models;

Aluno a1 = new Aluno();
a1.Nome = "Leonardo";
a1.Idade = 31;
a1.Email = "leonardo@hotmail.com";
a1.Nota = 10;
a1.Apresentar();

Professor p1 = new Professor();
p1.Nome = "Eduardo";
p1.Idade = 30;
p1.Salario = 1000;
p1.Apresentar();