package tratamentoDeErro;

public class ParImpar {
	private int numero;

	public ParImpar(int numero) {
		super();
		this.numero = numero;
	}

	public ParImpar() {
		super();
	}

	public int getNumero() {
		return numero;
	} 

	public void setNumero(int numero) {
		this.numero = numero;
	}
	
	public void testeImpar() {
		try {
			if((numero % 2) == 0) {
				System.out.println("O número é par");
			}else {
				throw new ParImparExcecao(numero);
			}
		} catch (ParImparExcecao e) {
			System.out.println("ToString: " + e.toString());
			System.out.println("GetMessage: " + e.getMessage());
		}
	}
	
	public void verificaParImpar() throws ParImparExcecao{
		if((numero % 2) == 0) {
			System.out.println("O número é par");
		} else {
			throw new ParImparExcecao(numero);
		}
	}
	

}
