/**
 * Reduzir um número a zero e mostrar a quantidade de etapas necessárias.
 */

import java.util.*;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int num = Integer.parseInt(sc.nextLine());
        int step = 0;

        while(num > 0) {
           if ((num % 2) == 0) {
            num /= 2;
           } else {
            num -= 1;
           }
           step++;
        }
        System.out.println(step);
        sc.close();
        
    }
}
