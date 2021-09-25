function adivinhar() {
    var numeroSorteado= parseInt((Math.random() * 11));
    var chute= parseInt(document.getElementById("chute").value);

    console.log(chute);
    console.log(numeroSorteado);

    if (chute == numeroSorteado) {
        document.getElementById("resultado").innerHTML="VOCÊ ACERTOU!! QUE MÁGICO!"
    } else {
        document.getElementById("resultado").innerHTML="VOCÊ ERROU!! EU ESTAVA PENSANDO NO NÚMERO " + numeroSorteado + "."
    }

}