var sums = require('./sums');

var expectEquals = function(f, grid, expected){
  var actual = f(grid) || {};
  for(o in expected){
    if(expected[o] !== actual[o]){
      console.log('actual', actual, "\n", 'expected:', expected);
      process.stdout.write("!");
      return false;
    }
  }
  process.stdout.write(".");
  return true;
};

// Horizontal
// ==========
expectEquals(sums.hRows, [  1,  1,  1,
                           -1,  1, -1,
                            1, -1, -1 ], { sum: 3, i: 2, direction: 'h'});

expectEquals(sums.hRows, [ -1,  1, -1,
                            1,  1,  1,
                            1, -1, -1 ], { sum: 3, i: 5, direction: 'h'});

expectEquals(sums.hRows, [ -1, -1, -1,
                            1,  1,  1,
                            1,  1, -1 ], { sum: -3, i: 2,  direction: 'h'});

expectEquals(sums.hRows, [ -1, -1, -1,  1,
                            1,  1,  1,  1,
                            1,  1, -1, -1 ,
                           -1,  1, -1,  1], { sum: 4, i: 7,  direction: 'h'});

// Vertical
// ========
expectEquals(sums.vRows, [ -1,  1, -1,
                           -1,  1,  1,
                            1,  1, -1 ], { sum: 3, i: 7, direction: 'v'});

expectEquals(sums.vRows, [ -1, -1,  1,
                            1, -1,  1,
                            1, -1,  1 ], { sum: -3, i: 7, direction: 'v'});

expectEquals(sums.vRows, [ -1, -1,  1,
                           -1, -1,  1,
                            1,  1,  1 ], { sum: 3, i: 8, direction: 'v'});

expectEquals(sums.vRows, [ -1, -1, -1,  1,
                            1, -1,  1,  1,
                            1, -1,  1, -1 ,
                           -1, -1,  1,  1], { sum: -4, i: 13,  direction: 'v'});

// Diagonal
// ========
expectEquals(sums.diagonal, [  1,  1, -1,
                              -1,  1,  1,
                              -1, -1,  1 ], { sum: 3, i: 8, direction: 'd'});

expectEquals(sums.diagonal, [ -1,  1, -1,
                               1, -1,  1,
                              -1,  1, -1 ], { sum: -3, i: 8, direction: 'd'});

expectEquals(sums.diagonal, [  1, -1, -1,  1,
                              -1,  1,  1,  1,
                               1, -1,  1, -1 ,
                              -1,  1, -1,  1], { sum: 4, i: 15,  direction: 'd'});

// Diagonal Inverse
// ================
expectEquals(sums.diagonalInverse, [  1, -1,  1,
                                     -1,  1, -1,
                                      1,  1, -1 ], { sum: 3, i: 6, direction: 'di'});

expectEquals(sums.diagonalInverse, [  1,  1, -1,
                                      1, -1,  1,
                                     -1,  1, -1 ], { sum: -3, i: 6, direction: 'di'});

expectEquals(sums.diagonalInverse, [  1,  1,  1, -1,
                                     -1, -1, -1,  1,
                                      1, -1,  1, -1 ,
                                     -1,  1, -1,  1], { sum: -4, i: 12,  direction: 'di'});
