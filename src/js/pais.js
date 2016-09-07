"use strict";
var EventEmitter = require('events');
var inherits = require('util').inherits;

function Pais(indiceDesarrollo, tipoPoblacion, poblacionTotal, poblacionSana, poblacionInfectada, poblacionMuerta) {

	this.indiceDesarrollo = indiceDesarrollo;
	this.tipoPoblacion 		= tipoPoblacion;
	this.poblacionTotal 	= poblacionTotal;
	this.poblacionSana 		= poblacionSana;
	this.poblacionInfectada = poblacionInfectada;
	this.poblacionMuerta 	= poblacionMuerta;

	EventEmitter.call(this);
}

inherits(Pais, EventEmitter);

Pais.prototype.contagiar = function() {
	// Lo que haga
};

module.exports = Pais;