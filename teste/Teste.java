package teste;

import java.util.Scanner;

public class Teste {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Concurso concurso = new Concurso();
		Candidato c1 = new Candidato();
		String nota = null;
		
			for(int i = 0; i < 10; i++) {
				nota = scanner.next();
				if(nota.equals("a") || nota.equals("b") || nota.equals("c")|| nota.equals("d") || nota.equals("e")) {
					c1.lista[i] = nota;
				}else {
					System.out.println("Coloque uma nota válida.");
					i--;
				}
			}	
		
		for(int i = 0; i < 10; i++) {
			System.out.println(c1.lista[i]);
		}	
		
		
		System.out.println(concurso.corrigirProva(c1, concurso.listaConcurso)); 
		
	}
}
