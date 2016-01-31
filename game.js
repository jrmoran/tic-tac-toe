/* Tic Tac Toe
 * Jaime Moran
 * Jan 25, 2016
 */

var sums = require('./sums');

var grid = [0, 0, 0,
            0, 0, 0,
            0, 0, 0];

var findWinner = function(){
  var result = sums.hRows(grid) ||
               sums.vRows(grid) ||
               sums.diagonal(grid) ||
               sums.diagonalInverse(grid);
  if(result){
    if(result.sum > 0){
      return { player: 'X', result: result};
    }else{
      return { player: 'Y', result: result};
    }
  }
};

var printGrid = function(){
  var valueToSymbol = function(value){
    if(value === 1){ return 'X'; }
    if(value === -1){ return 'O'; }
    return value + 1;
  };
  for (var i = 0, t = grid.length; i < t; i++) {
    process.stdout.write((grid[i] !== 0 ? valueToSymbol(grid[i]) : i + 1) + "\t");
    if(i % 3 === 2){
      process.stdout.write("\n");
    }
  }
};

var printBoard = function(){
  console.log("\n-----------------");
  console.log("      Board      ");
  console.log("-----------------");
  printGrid();
  console.log("-----------------");
  console.log("select a cell 1-9");
  console.log("-----------------\n");
};

var promptPlayer = function(){
  console.log("> Player", nMoves % 2 === 0 ? 'X' : 'Y', ":");
};

var makeAMove = function(i, value){
  if(grid[i] === 0){
    var value = nMoves % 2 === 0 ? 1 : -1; 
    console.log('cell:', i + 1);
    grid[i] = value;
    return true;
  }
  return false;
};

var nMoves = 0;

var startGame = function(){
  var stdin = process.openStdin();

  console.log('=================');
  console.log('TIC    TAC    TOE');
  console.log('=================');

  printBoard();
  promptPlayer();

  stdin.addListener("data", function(i) {

    // console.log('nMoves', nMoves, 'grid length', grid.length);

    i = i.toString().trim();

    // input index is non-zero index
    if(makeAMove(i - 1)){
      printBoard();
      nMoves++;
    }else{
      console.log('invalid move');
    }
    
    var winner = findWinner();

    if(winner){
      printBoard();
      console.log("Player", winner.player, 'WINS!');
      stdin.pause();
    }else{
      promptPlayer();
    }

    if(nMoves === grid.length){
      printBoard();
      console.log("*** GAME OVER! ***");
      stdin.pause();
    }
  });
};

startGame();

