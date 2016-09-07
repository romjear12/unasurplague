"use strict";

var Continente = function(poblacionTotal, poblacionSana, poblacionInfectada, poblacionMuerta){

	this.poblacionTotal 	= poblacionTotal;
	this.poblacionSana 		= poblacionSana;
	this.poblacionInfectada = poblacionInfectada;
	this.poblacionMuerta 	= poblacionMuerta;

}

module.exports = Continente;