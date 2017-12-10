var grid = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];





function Game() {
  this.boardSize = 10;
  this.totalShips = 10;
  this.shipsSunk = 0;
  this.attempts = 0;
  this.ships = [new Carrier(), new Cannon(), new Cannon(), new Frigate(), new Frigate(), new Frigate(), new SailBoat(), new SailBoat(),
    new SailBoat(), new SailBoat()
  ];
  this.ships.forEach(function(ship) {
    this.generateShips(ship);

  }.bind(this) );
}




Game.prototype = {

  constructor: Game,
  // se dispara con, por ejemplo, game.fire("16");
  //también haciendo click en las celdas (se ejecuta la funcion que está en main.js).

  drawShips: function() {
    for (var i = 0; i < this.totalShips; i++) {
      var ship = this.ships[i];
      for (var j = 0; j < ship.length; j++) {
        document.getElementById(ship.locations[j]).classList.add(ship.name + '_ship');
      }
    }
  },

  fire: function(guess) {
    var ship = this.ships.find(function(s) {
      return s.locations.indexOf(guess) !== -1;
    });

    this.attempts++;
    document.querySelector('.attempts strong').textContent = this.attempts;

		var waterSound = new Audio();
    waterSound.src = 'audio/water.mp3';

		var explosionSound = new Audio();
    explosionSound.src = 'audio/explosion.mp3';





    if (ship) {
			explosionSound.play();
      console.log("hit!");
      ship.hits++;
      if (ship.hits === ship.length) {
        //(posiciones).background ship.image
        console.log("Your ship was sunk!");
        this.shipsSunk++;
        document.querySelector('.ships_sunk strong').textContent = this.shipsSunk;
        ship.number--;
        document.getElementById(ship.name + "_num").textContent = ship.number;
        var sunkShip = ship.name + "_num";
        //pintar el barco en las 4 posiciones


        //disminuir el número de barcos disponibles

        if (this.shipsSunk == this.totalShips) {
          endOfGame()
        }


      }
      document.getElementById(guess).classList.add('forbidden', 'hit');
    } else {
			waterSound.play();
      document.getElementById(guess).classList.add('forbidden', 'miss');
    }
  },

  generateShips: function(ship) {

    var isVertical = Math.random() > 0.5;
    if (this.validPosition(row, col, isVertical, ship)) {
      if (isVertical) {
        var row = Math.floor(Math.random() * (this.boardSize - 1));
        var col = Math.floor(Math.random() * (this.boardSize - ship.length - 1));
        for (var i = row; i < row + ship.length; i++) {
          grid[i][col] = "x";
          ship.locations.push(i + "-" + col);
        }
      } else {
        var row = Math.floor(Math.random() * (this.boardSize - ship.length - 1));
        var col = Math.floor(Math.random() * (this.boardSize - 1));
        for (var j = col; j < col + ship.length; j++) {
          grid[row][j] = "x";
          ship.locations.push(row + "-" + j);
        }
      }

    } else {
      this.generateShips(ship);
    }
  },

  validPosition: function(row, col, isVertical, ship) {
    if (isVertical) {
      for (var i = row; i < ship.length; i++) {
        if (grid[i][col] !== null) {
          return false;
        }
      }
    } else {
      for (var i = col; i < ship.length; i++) {
        if (grid[row][i] !== null) {
          return false;
        }
      }
    }

    return true;
  }

  //
  // endOfGame: function(){
  //
  //  alert("You beat your opponent. Wanna play again?");
  //  //mostrar un mensaje
  //  //mostrar todos los fondos de las cells
  //  //mostrar un mensaje: do you want to play again?
  //
  // }



};









// placeShips: function(){

// 	var locations=[];

// 	// si dirección horizontal (Esto como se lo indico?)


// 	for (var i = 0; i < this.totalShips; i++) {
// 			locations.push(generateInitialPosition());
// 			for (var j = 0; j < this.length; j++) {
// 				// añadir al array elementos con la misma columna y rows consecutivas
// 			}
// 		}
// 	}

// 	// si dirección vertical
// 	for (var i = 0; i < this.totalShips; i++) {
// 		locations.push(generateInitialPosition());
// 			for (var j = 0; j < this.length; j++) {
// 				// añadir al array elementos con la misma row y columnas consecutivas
// 			}
// 		}
// 	}


// }
// }








// check location


// if(cell.hasAship === true) {
// 	this.lives--;
// 	if(this.lives == 0) {
// 		el barco se ha hundido, lo que implica que:
// 		- se muestra el barco completo
// 		- se le pone mouse events 0
//   	    - se le quita un barco de la derecha
// 	}
// 	else {
// 	  pinta la imagen de la explosion
// 	}
// }

// else {
// 	pinta la imagen del agua
// }







// en el game van las instancias de todo.
