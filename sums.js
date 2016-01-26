var checkSum = function(size, direction, i, sum){
  if(Math.abs(sum) === size){
    return {
      sum: sum,
      i: i,
      direction: direction
    };
  }
};

var sumHRows = function(grid){
  var winner;
  var size = Math.sqrt(grid.length);
  for (var i = 0, sum, t = grid.length; i < t; i += size) {
    sum = 0;
    for(var j = 0, nCols = j + size; j < nCols; j++){
      sum += grid[i + j];
      winner = checkSum(size, 'h', i + j, sum);
    }
    if(winner){
      return winner;
    }
  }
};

var sumVRows = function(grid){
  var size = Math.sqrt(grid.length);
  for(var i = 0, sum; i < size; i++){
    sum = 0;
    for(var j = 0, t = grid.length; j < t; j+=size){
      sum += grid[i+j];
      winner = checkSum(size, 'v', i + j, sum);
    }
    if(winner){
      return winner;
    }
  }
};

var sumDiagonal = function(grid){
  var winner;
  var size = Math.sqrt(grid.length);
  for(var i = 0, sum = 0, t = grid.length ; i < t; i+=size + 1){
    sum += grid[i];
    winner = checkSum(size, 'd', i, sum);
    if(winner){
      return winner;
    }
  }
};

var sumDiagonalInverse = function(grid){
  var winner;
  var size = Math.sqrt(grid.length);
  for(var i = size - 1, sum = 0, t = grid.length; i <= t - size; i+=(size - 1)){
    sum += grid[i];
    winner = checkSum(size, 'di', i, sum);
    if(winner){
      return winner;
    }
  }
};

module.exports = {
  hRows: sumHRows,
  vRows: sumVRows,
  diagonal: sumDiagonal,
  diagonalInverse: sumDiagonalInverse
}
