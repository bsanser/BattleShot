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
	this.ships = [new Carrier(5), new Cannon(3),new Cannon(3),new Frigate(2), new Frigate(2),new Frigate(2), new SailBoat(1), new SailBoat(1), 
				  new SailBoat(1),new SailBoat(1)];
};




Game.prototype = {

	constructor: Game,

	fire: function(guess){

		for (var i = 0; i < this.totalShips; i++) {
			var ship = this.ships[i];
			var index =  ship.locations.indexOf(guess);
			if (index !== -1) {
				ship.hits[index] = "hit";
				document.getElementById(guess).classList.add("hit");
				return true;
			}

			else {
				document.getElementById(guess).classList.add("miss");
				return false;
			}

		}
	},

 	validPosition: function (row, col, ship) {
 		for(var i = row; i < ship.length; i++) {
 			if(grid[i][col] !== null) {
 				return false;
 			}
 			return true;
 		}



 	},



 	generateShips: function(ship){
		 	var row = Math.floor((Math.random() * (game.boardSize - ship.length)));
		 	var col = Math.floor((Math.random() * game.boardSize));
		 	if (!game.validPosition(row, col, ship)) {
		 		game.generateShips(ship);
		 	}
		 	else {
		 		for(var i = row; i < ship.length; i++) {
		 			grid[i][col] = "x";
		 			ship.locations.push([i][col]);
 			}
		 
	 }

	  // place ship horizontally (get a row and a column)

		 // else {
		 // 	var row = Math.floor((Math.random() * game.boardSize));
		 // 	var col = Math.floor((Math.random() * (game.boardSize - ship.length)));
		 //
		
		 // 		for (i = 0; i < ship.length; i++) {
		 // 			ship.locations.push([row, col++]);
		 // 			grid[row][col] = "x";
		 // 		}

		 // }

	
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