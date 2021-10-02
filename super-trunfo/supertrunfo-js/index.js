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
        atributos: { ataque: 3, defesa: 10, magia: 6 }
    })
];

var cartaJogador;
var cartaMaquina;
var indiceMaquina = 0;
var indiceJogador = 0;

//SORTEIO DAS CARTAS

function sortearCarta() {
    while (indiceMaquina == indiceJogador) {
        var indiceMaquina = parseInt(Math.random() * cartas.length);
        var indiceJogador = parseInt(Math.random() * cartas.length);
    }

    cartaJogador = cartas[indiceJogador];
    cartaMaquina = cartas[indiceMaquina];

    console.log(cartaMaquina);
    console.log(cartaJogador);
}
