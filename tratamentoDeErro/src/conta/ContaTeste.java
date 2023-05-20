package conta;

import java.util.Scanner;

public class ContaTeste {
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		Conta conta = new Conta();
		conta.setSaldo(1000d);
		conta.depositar(500d);
		try {
			conta.sacar(600d);
			System.out.println("O novo saldo é " + conta.getSaldo());
		} catch (ContaExcecao e) {
			System.out.println(e.toString());
		}
		
	}
}
