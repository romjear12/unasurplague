var EventEmitter = require('events');

class MyEmitter extends EventEmitter {

	constructor(){
		super();
	}

	contagiado(pais) {
		this.emit('contagiado', pais);
	}
	

}

module.exports = MyEmitter;