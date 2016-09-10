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

	set poblacionInfectada(cantidad) {
		this._poblacionInfectada = cantidad;
	}

	/**
	 * Empieza a contagiarse la enfermedad en este país
	 * @param  {Enfermedad} enfermedad
	 * @return {[type]}            [description]
	 */
	contagiarPais(enfermedad) {

		this._poblacionInfectada = 1;
		this._enfermedad = enfermedad;
		this._tasaTransmision = this.calcularTasaContagio();
		this._poblacionSana = this._poblacionTotal - this._poblacionInfectada;

		this._emitter.contagiado({code: this._code});
		return {ok:'ok'};

	}

	/**
	 * Calcula la población infectada en un dt
	 * @return {[type]} [description]
	 */
	calcularPoblacionInfectadaDt() {

		let indiceDesarrollo = (this._indiceDesarrollo / 100) * this._enfermedad.tasaTransmision;

		let alfa = this._enfermedad.tasaTransmision - indiceDesarrollo;


		// SIR 				
		let N = this.poblacionTotal;
		let I = this.poblacionInfectada;
		let S = N - I;
		let R = this.poblacionMuerta;

		let infectados = ( alfa * ( I / N ) * S ) - R;

		return infectados;

	}

	/**
	 * Calcula y acumula la cantidad de contagiados
	 * @return {[type]} [description]
	 */
	calcularTasaContagio() {
		let infectadosDt = this.calcularPoblacionInfectadaDt();
		//console.log('tasa calcularTasaContagio() ');

		this._tasaTransmision = this._tasaTransmision + infectadosDt;
		//console.log('_tasaTransmision calcularTasaContagio() '+ tasa);

		this._poblacionInfectada = this._poblacionInfectada + Math.floor(this._tasaTransmision);
		//console.log('_poblacionInfectada calcularTasaContagio() '+ tasa);

		// this._enfermedad.revisarTasaTransmision();

		return this._poblacionInfectada;
	}

	infectarPaisVecino() {

	}

}

module.exports = Pais;