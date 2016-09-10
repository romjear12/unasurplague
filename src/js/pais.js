"use strict";

class Pais{

	constructor(code, indiceDesarrollo, tipoPoblacion, poblacionTotal,vecinos, emitter){
		// super();
		this._code = code;
		this._indiceDesarrollo = indiceDesarrollo;
		this._tipoPoblacion 		= tipoPoblacion;
		this._poblacionTotal 	= poblacionTotal;
		this._poblacionSana 		= this._poblacionTotal;
		this._indiceContagioVecino = Math.floor(this._poblacionTotal * 0.4);
		this._vecinos = vecinos.sort((a,b) => b.peso - a.peso);
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
	 * Retorna la eficiencia de la enfermedad en el pais segun las
	 * caracteristicas del pais y de la enfermedad
	 * @return {eficiencia} 0-100
	 */
	eficienciaEnfermedad() {
		var eficiencia = 0,
			tipoPoblacion = this._tipoPoblacion[0],
			transmision = this._tipoPoblacion[2],
			habilidades = this._tipoPoblacion[1]
		;

		if (this._enfermedad._tipoPoblacion.includes(tipoPoblacion)) 
			eficiencia += 5;
		if (this._enfermedad._transmision.includes(transmision)) 
			eficiencia += 5;
		if (this._enfermedad._habilidades.includes(habilidades)) 
			eficiencia += 5;

		return eficiencia / 100;

	}

	/**
	 * Calcula la población infectada en un dt
	 * @return {[type]} [description]
	 */
	calcularPoblacionInfectadaDt() {

		let indiceDesarrollo = ( this._indiceDesarrollo / 100) * this._enfermedad.tasaTransmision;

		let alfa = (this._enfermedad.tasaTransmision + this.eficienciaEnfermedad()) - indiceDesarrollo;


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
		// console.log('tasa calcularTasaContagio() '+ tasa);

		this._tasaTransmision = this._tasaTransmision + infectadosDt;
		// console.log('_tasaTransmision calcularTasaContagio() '+ tasa);

		this._poblacionInfectada += Math.floor(this._tasaTransmision);
		this._poblacionSana -= Math.floor(this._tasaTransmision);
		// console.log('_poblacionInfectada calcularTasaContagio() '+ tasa);

		// this._enfermedad.revisarTasaTransmision();

		return this._poblacionInfectada;
	}

	infectarPaisVecino(paises, paisesContagiados) {
		let contagiado = 0;
		if (this._poblacionInfectada >= this._indiceContagioVecino) {
			for (var i = 0; i < this._vecinos.length; i++) {
				var paisInfectar = this._vecinos[i];
				if (paisesContagiados.find((elem, index, arr) => elem._code == paisInfectar.code) !== undefined) {

					var pais = paises.find((elem, index, arr) => elem._code == paisInfectar.code);

					pais.contagiarPais(this._enfermedad);
					contagiado = 1;

				}
			}
		}

		if (contagiado === 1) {
			this._indiceContagioVecino += Math.floor((this._poblacionTotal * 0.1));
		}
		return;
	}

}

module.exports = Pais;