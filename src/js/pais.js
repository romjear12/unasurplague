"use strict";
var EventEmitter = require('events');
// var inherits = require('util').inherits;
// 

class Pais extends EventEmitter {

	constructor(indiceDesarrollo, tipoPoblacion, poblacionTotal, poblacionSana, poblacionInfectada, poblacionMuerta){
		super();
		this.indiceDesarrollo = indiceDesarrollo;
		this.tipoPoblacion 		= tipoPoblacion;
		this.poblacionTotal 	= poblacionTotal;
		this.poblacionSana 		= poblacionSana;
		this.poblacionInfectada = poblacionInfectada;
		this.poblacionMuerta 	= poblacionMuerta;
	}

	get indice () {
		return this.indiceDesarrollo * 2;
	}

}

module.exports = Pais;