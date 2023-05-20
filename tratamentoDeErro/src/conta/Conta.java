package conta;

public class Conta {
	
	private Double saldo;

	public Conta() {
		super();
	}

	public Conta(Double saldo) {
		super();
		this.saldo = saldo;
	}

	public Double getSaldo() {
		return saldo;
	}

	public void setSaldo(Double saldo) {
		this.saldo = saldo;
	}
	
	public Double depositar(Double valor) {
		return this.saldo += valor;
	}
	
	public void sacar(Double valor) throws ContaExcecao{
		if((this.saldo - valor) < 0) {
			throw new ContaExcecao();
		} else {
			this.saldo -= valor;
		}
	}
	
}
