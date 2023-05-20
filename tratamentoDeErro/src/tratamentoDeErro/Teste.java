package tratamentoDeErro;

import java.util.Scanner;

import javax.management.RuntimeErrorException;

public class Teste {
	public static void main(String[] args) {
		
		String senha = "123456";
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Digite a senha: ");
		String senhaUsuario = scanner.next();
		
		try {
			if(!senha.equals(senhaUsuario)) {
				throw new Exception("Senha inválida");
			}else {
				System.out.println("Senha correta");
			}
		} catch (Exception e) {
			System.out.println(e.getMessage()); 
		}
		
		
		
		
	}

}
