package tratamentoDeErro;

import java.util.Scanner;

public class ParImparTeste {
	public static void main(String[] args) {
		int num;
		Scanner scanner = new Scanner(System.in);
		ParImpar p = new ParImpar();
		
		System.out.println("Digite o número: ");
		num = scanner.nextInt();
		p.setNumero(num);
		
		try {
			p.verificaParImpar();
		} catch (ParImparExcecao e) {
			System.out.println(e.getMessage());
			System.out.println(e.toString());
		}
		
		
	}
	
}
