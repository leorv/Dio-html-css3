import java.util.Scanner;

/**
 * Em um jogo 2D existe um robô de limpeza que começa na posição (0,0). Ele
 * recebe alguns comandos através de uma sequência de movimentos. Os movimentos
 * válidos são: 'W' (movimento para cima), "S"(movimento para baixo),
 * "D"(movimento para direita) e "A"(movimento para esquerda). Você deverá
 * verificar se após completar seus movimentos o robô se encontra na posição
 * (0,0). Retorne true se o robô retornar à origem ou false caso contrário.
 * Assuma que a magnitude do movimento do robô é a mesma para cada movimento.
 */

public class App {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String movimentos = sc.nextLine();

        int x = 0;
        int y = 0;

        for (int i = 0; i < movimentos.length(); i++) {
            char ch = movimentos.charAt(i);
            switch (ch) {
                case 'W':
                    y++;
                    break;
                case 'S':
                    y--;
                    break;
                case 'A':
                    x--;
                    break;
                case 'D':
                    x++;
                    break;
            }
        }

        if (x == 0 && y == 0) {
            System.out.println("true");
        }
        else{
            System.out.println("false");
        }

        sc.close();
    }
}
