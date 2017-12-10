
function Ship(length, name, number, image) {
	this.length = length;
	this.name = name;
	this.hits = 0;
	this.number = number;
	this.image = image;
	this.locations =[];
}

//el number lo he añadido en lugar del array que habíamos hablado (asi es mas facil acceder).
 // Ahora tengo que averiguar como lo muestro.


function Carrier () {
  Ship.call(this,5, "carrier", 1, "images/carrier.png");
}

Carrier.prototype = Object.create(Ship.prototype);

function Cannon () {
  Ship.call(this,3, "cannon", 2, "images/cannon_boat.png");
}

Cannon.prototype = Object.create(Ship.prototype);

function Frigate () {
  Ship.call(this,2, "frigate", 3, "images/frigate.png");
}

Frigate.prototype = Object.create(Ship.prototype);

function SailBoat () {
  Ship.call(this,1, "sailBoat", 4, "images/sailBoat.png");
}

SailBoat.prototype = Object.create(Ship.prototype);
