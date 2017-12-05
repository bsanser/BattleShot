
function Ship(length) {
	this.length = length;
	this.hits = length;
	this.locations =[];
}


function Carrier () {
  Ship.call(this,5);
}

Carrier.prototype = Object.create(Ship.prototype);

function Cannon () {
  Ship.call(this,3);
}

Cannon.prototype = Object.create(Ship.prototype);

function Frigate () {
  Ship.call(this,2);
}

Frigate.prototype = Object.create(Ship.prototype);

function SailBoat () {
  Ship.call(this,1);
}

SailBoat.prototype = Object.create(Ship.prototype);



					
					





