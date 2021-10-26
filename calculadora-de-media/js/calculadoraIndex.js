function calcular() {
    var nomeAluno = document.getElementById("nomeAluno").value;

    var notas = [parseInt(document.getElementById("n1").value), parseInt(document.getElementById("n2").value), parseInt(document.getElementById("n3").value), parseInt(document.getElementById("n4").value)];

    var media = (notas[1] + notas[2] + notas[3] + notas[0]) / 4;

    if (media > 5) {
        document.getElementById("resultado").innerHTML = `O(A) aluno(a) ${nomeAluno} foi APROVADO(A) com média ${media}.`;
    } else {
        document.getElementById("resultado").innerHTML = `O(A) aluno(a) ${nomeAluno} foi REPROVADA com média ${media}.`
    }
}