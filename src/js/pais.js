"use strict";
var EventEmitter = require('events');
// var inherits = require('util').inherits;
// 

class Pais extends EventEmitter {

	constructor(code, indiceDesarrollo, tipoPoblacion, poblacionTotal, poblacionSana, poblacionInfectada, poblacionMuerta){
		super();
		this._code = code;
		this._indiceDesarrollo = indiceDesarrollo;
		this._tipoPoblacion 		= tipoPoblacion;
		this._poblacionTotal 	= poblacionTotal;
		this._poblacionSana 		= poblacionSana;
		this._poblacionInfectada = poblacionInfectada;
		this._poblacionMuerta 	= poblacionMuerta;
		this._tasaTransmision = 0;
	}

	get code() {
		return this._code;
	}
	get indiceDesarrollo () {
		return this._indiceDesarrollo;
	}

	get tipoPoblacion () {
		return this._tipoPoblacion;
	}

	get poblacionTotal () {
		return this._poblacionTotal;
	}

	get poblacionSana () {
		return this._poblacionSana;
	}

	get poblacionInfectada () {
		return this._poblacionInfectada;
	}

	get poblacionMuerta () {
		return this._poblacionMuerta;
	}

	get tasaTransmision () {
		return this._tasaTransmision;
	}

	set tasaTransmision(tasa) {
		this._tasaTransmision = tasa;
	}

}

module.exports = Pais;