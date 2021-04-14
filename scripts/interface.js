// garantir que o html foi carregado 
document.addEventListener('DOMContentLoaded', () => {
    // pegar todas divs  com a classe posicoes
    let posicoes = document.querySelectorAll(".posicoes");
    // para cada posição um evento click 
    posicoes.forEach((posicao) => {
        posicao.addEventListener('click', selecionarQaudrado);
    })

});

function selecionarQaudrado(evento) {
    // posições target o elemento que sofreu a ação
    // posicao o elemento com id
    let posicoes = evento.target;
    posicao = posicoes.id;
    if (colocarSimbolo(posicao)) {
        setTimeout(() => {
            var resultado = document.getElementById('vencedor');
            if (vezJogador == 0) {
                resultado.innerHTML = `<div id='vencedor'>o vencedor foi o jogador da ${jogador0}</div>`
            } else {
                resultado.innerHTML = `<div id='vencedor'>o vencedor foi o jogador do ${jogador1}</div>`
            }
        }, 10);


    }
    updateSimbolos(posicao);
}

// pegar todas as posições qual simbolo referente no tabuleiro
function updateSimbolos(posicao) {

    // pegar todas divs  com a classe posicoes
    let posicoes = document.getElementById(posicao.toString());
    let simbolo = taboleiro[posicao];
    posicoes.innerHTML = `<div class = '${simbolo}'></div>`


}