import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Program {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    String dados = sc.nextLine();
    String[] dados2 = dados.split(", ");

    List<Integer> numeros = new ArrayList<>();

    for (String dado : dados2) {
      numeros.add(Integer.parseInt(dado));
    }

    for (int i = 0; i < numeros.size(); i++) {
      if (numeros.get(i) % 2 == 0) {
        System.out.println(numeros.get(i));
      }
    }
  }
}
