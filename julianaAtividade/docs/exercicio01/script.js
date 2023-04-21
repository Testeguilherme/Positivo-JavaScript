const select  =  document.getElementById('select');
select.addEventListener('change', (e) =>{
    if(e.target.value == "Homem de Ferro"){
        document.getElementById('imgHeroi').src = "./img/irm.jpg";   
    }else if(e.target.value == "Capitao America"){
        document.getElementById('imgHeroi').src = "./img/capt.jpg";
    }else if(e.target.value == "Homem Aranha"){
        document.getElementById('imgHeroi').src = "./img/hm.jpg";   
    }else if(e.target.value == "Hulk"){
        document.getElementById('imgHeroi').src = "./img/hulkf.jpg";   
    }else if(e.target.value == "marvelete"){
        document.getElementById('imgHeroi').src = "./img/mar.jpg";   
    }
})

function getCheck(){
    var elemento = document.querySelector("#select");
    var text = elemento.value;
    var pacote = document.getElementsByName('Pacote'); 
    
    for (var i = 0; i < pacote.length; i++){
        if (pacote[i].checked) {
            if(pacote[i].value == "origem" && text == "Homem de Ferro"){
                document.querySelector(".output").textContent = "O Homem de Ferro, também conhecido como Tony Stark, foi criado em 1963 por Stan Lee, que tinha como desafio desenvolver um personagem que pudesse ser odiado, para, então, ser amado pelo público.";

            }else if (pacote[i].value == "poderes" && text == "Homem de Ferro") {
                document.querySelector(".output").textContent = "O principal poder do Homem de Ferro é a sua inteligência acima da média e sua habilidade criativa.";

            }else if (pacote[i].value == "pessoal" && text == "Homem de Ferro") {
                document.querySelector(".output").textContent = "Você sabia que, ao longo dos quadrinhos, o Tony Stark sofreu terrivelmente com problema de alcoolismo. Além disso, um outro grande problema é a sua arrogância. Assim, ele constantemente se vê como o homem mais inteligente da sala, o que causou vários problemas e tensões entre ele e outros personagens.";

            }
        }

        if (pacote[i].checked) {
            if(pacote[i].value == "origem" && text == "Capitao America"){
                document.querySelector(".output").textContent = "Era 1941 e o criador de histórias em quadrinhos Joe Simon queria colocar um rosto no patriotismo 'ianque': assim criou o Capitão América, um jovem do Brooklin transformado em super-herói e que representa 'tudo o que faz com que os Estados Unidos sejam o melhor lugar do mundo para se viver'.";
            }else if (pacote[i].value == "poderes" && text == "Capitao America") {
                document.querySelector(".output").textContent = "O Capitão América possui uma extensa lista de poderes, entre os principais estão: fator de cura, força e velocidade sobre-humana, Perícia em luta corpo-a-corpo, agilidade, estamina, entre outros.";

            }else if (pacote[i].value == "pessoal" && text == "Capitao America") {
                document.querySelector(".output").textContent = "O Escudo do Capitão América é todo feito de Vibranium. Steven Rogers é capaz de realizar façanhas com o seu escudo que desafia as leis da física. Por ser feito de Vibranium ele é praticamente indestrutível e pode absorver quase todos os tipos de ataques.";

            }
        }

        if (pacote[i].checked) {
            if(pacote[i].value == "origem" && text == "Homem Aranha"){
                document.querySelector(".output").textContent = "O Homem-Aranha apareceu pela primeira vez em 01 de Agosto de 1962, durante a Era de Prata dos Quadrinhos. Peter Parker é um órfão que foi educado e criado pela sua tia (May Parker) e o seu tio (Ben Parker) em Nova Iorque e que, enquanto adolescente, tem de lidar com as lutas diárias normais da sua idade, em adição às lutas que tem como combatente do crime.";

            }else if (pacote[i].value == "poderes" && text == "Homem Aranha") {
                document.querySelector(".output").textContent = "O Homem-Aranha desenvolveu seus poderes após ser picado por uma aranha. Dentre as suas façanhas, o herói possui superforça e superagilidade para combater seus inimigos, além do seu sentido-aranha, que permite identificar perigos e ameaças ao redor com antecedência.";

            }else if (pacote[i].value == "pessoal" && text == "Homem Aranha") {
                document.querySelector(".output").textContent = "Você sabia que o Homem Aranha era um legítimo pegador? Pois é, não foi apenas Mary Jane e Gwen Stacy que namoraram Peter Park. Nos quadrinhos, o herói teve várias namoradas: Liz Allen, Betty Brant, Carlie Cooper, Michelle Gonzalez, Debra Whitman, além de três heroínas Sabre de Prata, Seda e até a Capitã Marvel.";

            }
        }

        if (pacote[i].checked) {
            if(pacote[i].value == "origem" && text == "Hulk"){
                document.querySelector(".output").textContent = "O Incrível Hulk teve a sua primeira aparição em 1962, criado pelo roteirista Stan Lee.";

            }else if (pacote[i].value == "poderes" && text == "Hulk") {
                document.querySelector(".output").textContent = "A origem dos poderes do Hulk se deu através da detonação de uma bomba de raios gamas que o acertou, modificando o seu DNA.";

            }else if (pacote[i].value == "pessoal" && text == "Hulk") {
                document.querySelector(".output").textContent = "O sangue irradiado do Hulk pode transformar também outras pessoas, algo que ficou provado no caso da Mulher-Hulk. Bruce Banner tem uma prima, Jennifer Walters, a quem ele era muito apegado na infância. Ao reencontrá-la quando adultos, Jennifer é emboscada por criminosos devido a um caso que estava defendendo, e é baleada. Sem outras opções para salvar a prima, Bruce deu a ela uma transfusão de seu próprio sangue.A partir de então, ela passou a ser uma super-heroína chamada Mulher-Hulk.";

            }
        }
    }

}





