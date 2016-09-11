var EventEmitter = require('events');

class MyEmitter extends EventEmitter {

	constructor(){
		super();
	}

	contagiado(pais) {
		this.emit('contagiado', pais);
	}

	nuevoSintoma(sintoma) {
		this.emit('nuevo-sintoma', sintoma);
	}

	aumentoTasaMortalidad(tasa) {
		this.emit('aumento-tasa-mortalidad', tasa);
	}

	curaCompleta() {
		this.emit('cura-completa');
	}

}

module.exports = MyEmitter;