// JOGADORES

var rafa = {nome:"Rafa", vitorias:2, empates:1, derrotas:1, pontos: 0};
var paulo = {nome:"Paulo", vitorias:1, empates:1, derrotas:2, pontos:0};

var jogadores = [rafa, paulo]

// FUNÇÃO PARA CALCULAR PONTOS

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias) * 3 + jogador.empates;

    return pontos //retona um valor ao final da execução da função;

} /* a função recebeu o parâmetro (ou argumento) "jogador". Ao ser chamada, deve ser incluído entre () o identificador que substituirá "jogador", para que seja chamado o valor correspondente à propriedade escolhida */
calculaPontos(rafa); /*susbtituirá "jogador" pelo identificador "rafa" em todo o bloco de execução */
rafa.pontos = calculaPontos(rafa); // atribui o valor obtido no return da função calculaPontos(rafa) para a propriedade pontos do objeto rafa

calculaPontos(paulo);
paulo.pontos = calculaPontos(paulo);

// FUNÇÃO PARA CRIAR UMA TABELA DE JOGADORES

function criaTabela(listaJogadores) {
    var elementosTabela = ""

    for (i = 0; i < listaJogadores.length; i++) {
        elementosTabela += "<tr><td>" + listaJogadores[i].nome + "</td>"
        elementosTabela += "<td>" + listaJogadores[i].vitorias + "</td>"
        elementosTabela += "<td>" + listaJogadores[i].empates + "</td>"
        elementosTabela += "<td>" + listaJogadores[i].derrotas + "</td>"
        elementosTabela += "<td>" + listaJogadores[i].pontos + "</td>"
        elementosTabela += "<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td>"
        elementosTabela += "<td><button onClick='adicionarEmpate("+i+")'>Empate</button></td>"
        elementosTabela += "<td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td></tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elementosTabela
}

criaTabela(jogadores);

// FUNÇÕES PARA INCLUIR VITÓRIAS, EMPATES E DERROTAS

function adicionarVitoria(i) {
    var vencedor = jogadores[i] //criar variável para receber o elemento da array que será trabalhado 
    vencedor.vitorias++ //atualiza a propriedade vitórias no objeto indicado pelo elemento da array
    vencedor.pontos = calculaPontos(vencedor); //atualiza os pontos do jogador
    criaTabela(jogadores); //refaz a tabela com os valores atualizados
}

function adicionarEmpate(i) {
    var empatado = jogadores[i]
    empatado.empates++
    empatado.pontos = calculaPontos(empatado);
    criaTabela(jogadores);
}

function adicionarDerrota(i) {
    var perdedor = jogadores[i]
    perdedor.derrotas ++
    perdedor.pontos = calculaPontos(perdedor);
    criaTabela(jogadores);
}

