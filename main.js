



$(function(){

  function createGrid(num) {
      for (var rows = 0; rows < num; rows++) {
      	// empty row
          for (var cols = 0; cols < num; cols++) {
             $("#board").append(
              	"<div class='cell panel' id=" + rows + cols + " ></div>"
              );
          }
      }
  }

createGrid(10);
game = new Game();



$(".cell").click(function(event) {
      var idClicked = event.target.id;
      game.fire(idClicked);
    });



});

// game.generateShips(game.ships[0]);


  // for(var i = 0; i < game.ships.length; i++) {
  //  game.generateShips(game.ships[i]);
  // }

  // console.table(game.ships);
  //game.ships[1].locations
