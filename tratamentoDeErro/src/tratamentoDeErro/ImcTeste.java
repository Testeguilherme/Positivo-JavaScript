package tratamentoDeErro;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ImcTeste {
	
	public static void main(String[] args) {
		
		Integer peso, altura;
		Scanner scanner = new Scanner(System.in);
		
		try {
			System.out.println("Digite a altura: ");
			peso = scanner.nextInt();
			System.out.println("Digite o peso: ");
			altura = scanner.nextInt();
			if(altura == 0) {
				throw new ArithmeticException();
			}else {
				System.out.println("IMC: " + (peso / (altura*altura)));
			}
		} catch (InputMismatchException e) {
			System.out.println("Erro em um dos valores informados");
		} catch (ArithmeticException e) {
			System.out.println("Erro de divisão por zero");
		}
		
		
	}
}
