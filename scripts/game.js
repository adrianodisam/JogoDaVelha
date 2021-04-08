//inicia as variáveis

//taboleiro no array com 9 posições um para cada quadrado
let taboleiro = ['','','','','','','','',''];
// vez  do jogador
let vezJogador = 0;
// simbolos do quadrado
let simbolos = ['o', 'x'];
// fim de jogo
let gameOver = false;
 let winsStates = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];


// função de colocar um simbolo dentro do quadrado
function colocarSimbolo (posicao){
  // se é o fim do jogo
  if(gameOver){
    return
  }
  // verifica se o esapaço do taboleiro está vazio  não atualiza o array
  if(taboleiro[posicao]== ''){
// pegar o taboleiro e colocar a posição
  taboleiro[posicao]= simbolos[vezJogador];
   gameOver = isWin();

   if(gameOver == false){
//passar a vez  do jogador
  vezJogador = (vezJogador ==0) ? 1 : 0;
  }
}
    return gameOver;
  }
// posições de vitória
  function isWin(){
   
    for(let i = 0; i < winsStates.length; i++){
      let sequencia =  winsStates[i];
      let pos1 = sequencia[0];
      let pos2 = sequencia[1];
      let pos3 = sequencia[2];
     if(taboleiro[pos1] == taboleiro[pos2]&&
        taboleiro[pos1] == taboleiro[pos3]&&
        taboleiro[pos1] !=''){
          return true;
        }
    }
    return false;
  }

