"use strict";

class Pais{

	constructor(code, indiceDesarrollo, tipoPoblacion, poblacionTotal, emitter){
		// super();
		this._code = code;
		this._indiceDesarrollo = indiceDesarrollo;
		this._tipoPoblacion 		= tipoPoblacion;
		this._poblacionTotal 	= poblacionTotal;
		this._poblacionSana 		= this._poblacionTotal;
		this._poblacionInfectada = 0;
		this._poblacionMuerta 	= 0;
		this._tasaTransmision = 0;
		this._emitter = emitter;
		this._enfermedad = {};
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

	// set poblacionInfectada(cantidad) {
	// 	this._poblacionInfectada = cantidad;
	// }

	/**
	 * Empieza a contagiarse la enfermedad en este país
	 * @param  {Enfermedad} enfermedad
	 * @return {[type]}            [description]
	 */
	contagiarPais(enfermedad) {

		this._poblacionInfectada = 1;
		this._tasaTransmision = this.calcularTasaContagio();
		this._enfermedad = enfermedad;

		this._emitter.contagiado({code: this._code});
		return ;

	}

	calcularTasaContagio() {
		return (this._poblacionInfectada / this._poblacionTotal) * 10000;
	}

}

module.exports = Pais;