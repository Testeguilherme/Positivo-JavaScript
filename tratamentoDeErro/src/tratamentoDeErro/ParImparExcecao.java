package tratamentoDeErro;

public class ParImparExcecao extends Exception{
	private int num;
	
	public ParImparExcecao() {
	}

	public ParImparExcecao(int num) {
		this.num = num;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	@Override
	public String toString() {
		return "O número " + num + " é impar.";
	}
	
	public String getMessage() {
		return "O número é impar";
	}

	
	
	
	

}
