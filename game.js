var grid = [
[null, null, null, null, null, null,null, null,null,null],
[null, null, null, null, null, null,null, null,null,null],
[null, null, null, null, null, null,null, null,null,null],
[null, null, null, null, null, null,null, null,null,null],
[null, null, null, null, null, null,null, null,null,null],
[null, null, null, null, null, null,null, null,null,null],
[null, null, null, null, null, null,null, null,null,null],
[null, null, null, null, null, null,null, null,null,null],
[null, null, null, null, null, null,null, null,null,null],
[null, null, null, null, null, null,null, null,null,null]
];





function Game() {
	this.boardSize = 10;
	this.totalShips = 10;	
	this.shipsSunk;
	this.ships = [new Carrier()];

	this.ships.forEach(function(ship) {
	  	this.generateShips(ship);
		}.bind(this)
	);
};

	// this.ships = [new Carrier(), new Cannon(),new Cannon(),new Frigate(), new Frigate(),new Frigate(), new SailBoat(), new SailBoat(), 
				  // new SailBoat(),new SailBoat()];



Game.prototype = {

	constructor: Game,

	fire: function(guess){

		for (var i = 0; i < this.totalShips; i++) {
			var ship = this.ships[i];
			var index =  ship.locations.indexOf(guess);
			if (index !== -1) {
				ship.hits[index] = "hit";
				document.getElementById(guess).classList.add("hit");
				if (ship.hits.length == ship.length){
					//pintar el barco en las 4 posiciones
					//disminuir el número de barcos disponibles
					this.shipsSunk++;
				}
				return true;
			}

			else {
				console.log(guess);
				document.getElementById(guess).classList.add("miss");
				return false;
			}

		}
	},

 	generateShips: function(ship) {
		 	var row = Math.floor(Math.random() * (this.boardSize - ship.length - 1));
		 	var col = Math.floor(Math.random() * (this.boardSize - 1));
		 	var isVertical = Math.random() > 0.5;
		 	if (this.validPosition(row, col, isVertical, ship)) {
		 		if (isVertical) {
		 			for (var i = row; i < row + ship.length; i++) {
			 			grid[i][col] = "x";
			 			ship.locations.push([i, col]);
	 				}
		 		} else {
		 			for (var i = col; i < col + ship.length; i++) {
			 			grid[row][i] = "x";
			 			ship.locations.push([row, i]);
	 				}
		 		}
		 		
		 	} else {
 				this.generateShips(ship);
	 		}
	},

	validPosition: function (row, col, isVertical, ship) {
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

//la primera vez coloco el barco y lo pinto. En la segunda iteración., antes de pintar el barco en el grid hay que comprobar que sus posiciones estén
// vacias. Si no, genero otro.
		 	




 	
	




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

	


	
};


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