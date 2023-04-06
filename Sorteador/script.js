
function botaoSortear() {
    let min = document.getElementById("mini").value;
    let minimo = parseInt(min);
    let max = document.getElementById("maxi").value;
    let maximo = parseInt(max);
    let result = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
    document.getElementById("resultado").innerHTML = result;
}