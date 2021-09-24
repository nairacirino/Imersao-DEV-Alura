function calcular() {
    nomeAluno();
    calculaMedia();
}

function nomeAluno () {
    var nomeAluno= document.getElementById("nomeAluno").value;
    console.log(nomeAluno)
}

function calculaMedia() {
    var notas= [parseInt(document.getElementById("n1").value), parseInt(document.getElementById("n2").value), parseInt(document.getElementById("n3").value), parseInt(document.getElementById("n4").value)];
    console.log(notas);

    var media= (notas[1] + notas[2] + notas[3] + notas[0])/4;
    console.log(media);
    
    if (media > 5) {
    console.log("APROVADA");
    document.getElementById("resultado").innerHTML= "APROVADA com média " + media + ".";
} else {
    document.getElementById("resultado").innerHTML= "REPROVADA com média " + media + "."
}
}