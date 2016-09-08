"use strict";
// var EventEmitter = require('events');

class Enfermedad {

	constructor(nombre, emitter) {
		// super();
		this._nombre 		= nombre;
		this._tasaTransmision = 0.01;
		this._tipoPoblacion = [];
		this._sintomas 		= [];
		this._transmision 	= [];
		this._habilidades 	= [];
		this._afeccion 		= [];
		this._emitter = emitter;
	}

	get tasaTransmision() {
		return this._tasaTransmision;
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

	revisarTasaTransmision(totalContagiados, totalPoblacion) {

		let tasa =  (totalContagiados / totalPoblacion);
		this._tasaTransmision =  this._tasaTransmision + tasa;
		return this._tasaTransmision;

	} 

}

module.exports = Enfermedad;