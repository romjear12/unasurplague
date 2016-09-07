"use strict";
var EventEmitter = require('events');

class Enfermedad extends EventEmitter {

	constructor(nombre) {
		super();
		this._nombre 		= nombre;
		this._tipoPoblacion = [];
		this._sintomas 		= [];
		this._transmision 	= [];
		this._habilidades 	= [];
		this._afeccion 		= [];
	}

	get nombre(){
		return this._nombre;
	}
	get tipoPoblacion(){
		return this._tipoPoblacion;
	}
	get sintomas(){
		return this._sintomas;
	}
	get transmision(){
		return this._transmision;
	}
	get habilidades(){
		return this._habilidades;
	}
	get afeccion(){
		return this._afeccion;
	}

}

module.exports = Enfermedad;