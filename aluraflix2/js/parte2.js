var seusFilmes = [];
function enviar() {
    var filmeInserido= document.getElementById("seusFilmes").value
    if (filmeInserido.endsWith(".jpg")){
        seusFilmes.push("<img src=" + filmeInserido + ">");
        console.log(seusFilmes);
        document.getElementById("resultado").innerHTML = seusFilmes;
    } else {
        alert("Endereço de imagem inválido");
    }
}