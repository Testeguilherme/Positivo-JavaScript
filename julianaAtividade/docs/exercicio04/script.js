function calcularMedia() {
    const nomeAluno = document.getElementById("nome").value;
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const nota4 = Number(document.getElementById("nota4").value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 6) {
        document.getElementById("resultado").style.backgroundColor = "#7FFF7F";
        document.getElementById("resultado").innerHTML = nomeAluno + " você está aprovado, com média: " + media;
    } else if (media >= 2.1 && media <= 5.9) {
        document.getElementById("resultado").style.backgroundColor = "#ADD8E6";
        document.getElementById("resultado").innerHTML = nomeAluno + " você está de recuperação, com média: " + media;
    } else {
        document.getElementById("resultado").style.backgroundColor = "#FF6961";
        document.getElementById("resultado").innerHTML = nomeAluno + " você está reprovado, com média: " + media;
    }
    
}