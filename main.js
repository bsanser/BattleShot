



$(function(){

  function createGrid(num) {
      for (var rows = 0; rows < num; rows++) {
      	// empty row
          for (var cols = 0; cols < num; cols++) {
             $("#board").append(
              	"<div class='cell' id=" + rows + "-" + cols + " ></div>"
              );
          }
      }
  }

createGrid(10);



$("#place_ships").click(function() {
  game = new Game();
  $(this).addClass("btn-large disabled");
  console.log("The ships have been placed!");
});

$("#end_game").click(function() {
  var response = prompt("Are you sure you want to end the game? (Y/N)");
  if(response == "Y" || "y") {
    game.drawShips();
    $(this).addClass("btn-large disabled");
  }
  else{
    return;
  }
});




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
