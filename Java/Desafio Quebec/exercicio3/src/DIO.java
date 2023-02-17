import java.util.Scanner;

/**
 * Dado um inteiro positivo num, retorne o número de inteiros positivos menor ou
 * igual a num cuja soma de dígitos é par. A soma dos dígitos de um inteiro
 * positivo é a soma de todos os seus dígitos.
 */

public class DIO {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);

        int num = Integer.parseInt(sc.nextLine());
        int count = 0;

        for (int i = 0; i <= num; i++) {
            String strNum = String.valueOf(i);
            int sum = 0;

            if (i != 0) {
                for (int j = 0; j < strNum.length(); j++ ) {
                    sum += Integer.parseInt(String.valueOf(strNum.charAt(j)));
                }
    
                if (sum % 2 == 0) {
                    count++;
                }
            }
            
        }

        System.out.println(count);

        sc.close();
    }
}
