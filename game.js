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
  this.carrierNum = 1;
  this.cannonNum = 2;
  this.frigateNum = 3;
  this.sailBoatNum = 4;
  this.shipsSunk = 0;
  this.remainingShips = 10;
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
        document.getElementById(ship.locations[j]).classList.remove('hit');
      }
      for (var row = 0; row < grid.length; row++) {
        // empty row
        for (var col = 0; col < grid.length; col++) {
          if (grid[row][col] === "null") {
            document.getElementById(row + "-" + col).classList.add('miss');
          }
        }
      }



    }
  },

  fire: function(guess) {
    var ship = this.ships.find(function(s) {
      return s.locations.indexOf(guess) !== -1;
    });

    this.attempts++;
    document.querySelector('#attempts strong').textContent = this.attempts;

    var waterSound = new Audio();
    waterSound.src = 'audio/water.mp3';

    var explosionSound = new Audio();
    explosionSound.src = 'audio/explosion.mp3';





    if (ship) {
      explosionSound.play();
      console.log("hit!");
      ship.hits++;
      document.getElementById(guess).classList.add('forbidden', 'hit');
      if (ship.hits === ship.length) {
        for (var j = 0; j < ship.length; j++) {
          document.getElementById(ship.locations[j]).classList.add(ship.name + '_ship');
          document.getElementById(ship.locations[j]).classList.remove('hit');
        }
        switch (ship.name) {
          case "carrier":
            this.carrierNum--;
            document.getElementById("carrier_num").textContent = this.carrierNum;
            if (this.carrierNum === 0) {
              document.getElementById("carrier_img").classList.add('sunk');
            }

            break;
          case "cannon":
            this.cannonNum--;
            document.getElementById("cannon_num").textContent = this.cannonNum;
            if (this.cannonNum === 0) {
              document.getElementById("cannon_img").classList.add('sunk');
            }

            break;
          case "frigate":

            this.frigateNum--;
            document.getElementById("frigate_num").textContent = this.frigateNum;
            if (this.frigateNum === 0) {
              document.getElementById("frigate_img").classList.add('sunk');
            }

            break;
          case "sailBoat":

            this.sailBoatNum--;
            document.getElementById("sailBoat_num").textContent = this.sailBoatNum;
            if (this.sailBoatNum === 0) {
              document.getElementById("sailBoat_img").classList.add('sunk');
            }

            break;


        }
        //disminuir el número de barcos disponibles
        // document.getElementById(this.ship.name + '_num').textContent = this.ship + 'Num';

        // document.getElementById(ship.name.toString() + "_num").textContent = ' ' + ship.name+ 'Num';
        // if (ship.name + 'Num'== 0) {
        //   document.getElementById(ship.name + '_img').classList.add("sunk");
        // }

        this.shipsSunk++;
        document.querySelector('#ships_sunk strong').textContent = this.shipsSunk;
        this.remainingShips--;
        document.querySelector('#remaining_ships strong').textContent = this.remainingShips;



        if (this.remainingShips === 0) {
          this.endOfGame();
        }

        //pintar el barco en las 4 posiciones

        if (this.shipsSunk == this.totalShips) {
          endOfGame();
        }
      }

    } else {
      waterSound.play();
      document.getElementById(guess).classList.add('forbidden', 'miss');
    }
  },


  generateShips: function(ship) {

    //first we generate a random number to decide direction of the ship
    var isVertical = Math.random() > 0.5;

    //we check if the initial position and the whole ship fits in unallocated space:
    // if the position is valid (True), generate the ship.
    // else give me another random col and row and check again.
    if (isVertical) {
      var row = Math.floor(Math.random() * (this.boardSize - 1));
      var col = Math.floor(Math.random() * (this.boardSize - ship.length - 1));
      if (this.validPosition(row, col, isVertical, ship)) {
        for (var i = row; i < row + ship.length; i++) {
          grid[i][col] = "x";
          ship.locations.push(i + "-" + col);
        }
      } else {
        this.generateShips(ship);
      }


    } else {
      var row = Math.floor(Math.random() * (this.boardSize - ship.length - 1));
      var col = Math.floor(Math.random() * (this.boardSize - 1));
      if (this.validPosition(row, col, isVertical, ship)) {
        for (var j = col; j < col + ship.length; j++) {
          grid[row][j] = "x";
          ship.locations.push(row + "-" + j);
        }
      } else {
        this.generateShips(ship);
      }
    }
  },

  //this is supposed to check whether both the initial position and the whole ship fits
  // (and does not occupy a position with a "X";
  // if the position is valid, it returns true and the

  validPosition: function(row, col, isVertical, ship) {
    if (isVertical) {
      for (var i = row; i < row + ship.length; i++) {
        if (grid[i][col] !== null) {
          return false;
        }
      }
    } else {
      for (var i = col; i < col + ship.length; i++) {
        if (grid[row][i] !== null) {
          return false;
        }
      }
    }

    return true;
  },

  //
  endOfGame: function() {
    alert("Congratulations! You sunk all of your opponent's ships! It took you " + game.attempts + " attempts!");
    var response = prompt("Do you want to play again? (Y/N)");
    if (response == "Y" || "y") {
      window.location.reload();
    } else {
      return;
    }
  }



};
