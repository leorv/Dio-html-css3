public class Arrays {

  public static void main(String[] args) {
    int[] numeros = { 2, 3, 5, 7, 11, 13, 18, 34 };

    for (int numero : numeros) {
      if (numero % 2 == 0) {
        System.out.println(numero);
      }
    }
  }
}
