/* VARIÁVEIS, ARRAYS E OBJETOS */

var cartas = [
    (carta1 = {
        nome: "Darth Vader",
        atributos: { ataque: 9, defesa: 8, magia: 2 }
    }),
    (carta2 = {
        nome: "Shiryu de Dragão",
        atributos: { ataque: 7, defesa: 4, magia: 10 }
    }),
    (carta3 = {
        nome: "Bulbasauro",
        atributos: { ataque: 5, defesa: 10, magia: 8 }
    })
];

var cartaJogador;
var cartaMaquina;
var indiceMaquina = 0;
var indiceJogador = 0;
var opcoesRadioButton;

// BOTÃO SORTEAR CARTA
function sortearCarta() {
    //SORTEIO DE CARTA
    while (indiceMaquina == indiceJogador) {
        var indiceMaquina = parseInt(Math.random() * cartas.length);
        var indiceJogador = parseInt(Math.random() * cartas.length);
    }

    cartaJogador = cartas[indiceJogador];
    cartaMaquina = cartas[indiceMaquina];

    //DESABILITANDO BOTÃO
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    criarRadioButton();
}

//GERANDO RADIO BUTTON
function criarRadioButton() {
    var radioButton = document.getElementById("radioButton")
    var opcoesRadioButton = ""

    // LISTANDO ATRIBUTOS

    for (var i in cartaJogador.atributos) {
        opcoesRadioButton += "<input type='radio' name='atributo' value='" + i + "'>" + i;
    }
    radioButton.innerHTML(opcoesRadioButton);
}
