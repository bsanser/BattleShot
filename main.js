

var game;

$(function(){

  function createGrid(num) {
      for (var rows = 0; rows < num; rows++) {
      	// empty row
          for (var cols = 0; cols < num; cols++) {
             $("#board").append(
              	"<div class='cell' id=" + rows + cols + "></div>"
              );

              // add null column to row (cada columna un array de 10 nulls)
             // var columns_arr = new Array;
            // columns_arr.push(null);

          };
          // add row to grid
          // grid.push(columns_arr);
     

      };
      
  };


  createGrid(10);

  game = new Game();

});

// game.generateShips(game.ships[0]);


  // for(var i = 0; i < game.ships.length; i++) {
  //  game.generateShips(game.ships[i]); 
  // }

  // console.table(game.ships);
  //game.ships[1].locations

