"use strict";
var EventEmitter = require('events');
var inherits = require('util').inherits;

function Enfermedad(nombre, tipoPoblacion, sintomas, transmision, habilidades, afeccion){

	this.nombre 		= nombre;
	this.tipoPoblacion 	= tipoPoblacion;
	this.sintomas 		= sintomas;
	this.transmision 	= transmision;
	this.habilidades 	= habilidades;
	this.afeccion 		= afeccion;

	EventEmitter.call(this);

}

module.exports = Enfermedad;