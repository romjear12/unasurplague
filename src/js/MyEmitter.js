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

	primeraMuerte(pais) {
		this.emit('primera-muerte', pais);
	}

	paisDestruido(pais) {
		this.emit('pais-destruido', pais);
	}

}

module.exports = MyEmitter;