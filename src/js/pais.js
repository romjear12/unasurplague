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
		this._tasaMortalidad = 0;
		this._destruido = false;
		this._infectado = false;
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

	get indiceContagioVecino () {
		return this._indiceContagioVecino;
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
		if (this._poblacionInfectada == 0) {
			this._poblacionInfectada = 1;
			this._infectado = true;
			this._enfermedad = enfermedad;
			this._tasaTransmision = this.calcularTasaContagio();
			this._poblacionSana = this._poblacionTotal - this._poblacionInfectada;

			this._emitter.contagiado({code: this._code});
			return {ok:'ok'};
		}

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
		let N = this._poblacionTotal;
		let I = this._poblacionInfectada;
		let S = N - I;
		let R = this._poblacionMuerta;

		let infectados = ( alfa * ( I / N ) * S ) - R;

		return infectados;

	}

	calcularPoblacionMuertaDt() {

		// let indiceDesarrollo = ( this._indiceDesarrollo / 100) * this._enfermedad.tasaMortalidad;

		let alfa = (this._enfermedad.tasaMortalidad);
		// alert(alfa);

		// SIR 				
		let N = this.poblacionInfectada;
		let I = this.poblacionMuerta;
		let S = N - I;


		let muertos = ( alfa * ( I / N ) * S );

		// alert(`N: ${N}, I: ${I}, S: ${S}, muertos: ${muertos}`);
		return muertos;

	}

	calcularMortalidad() {
		if (this._poblacionMuerta > 0 && !this._destruido) {
			if (this._infectado) {
				let muertosDt = this.calcularPoblacionMuertaDt();
				this._tasaMortalidad = this._tasaMortalidad + muertosDt;
				this._poblacionMuerta = this._poblacionMuerta + Math.floor(this._tasaMortalidad);
				this._poblacionInfectada = this._poblacionInfectada - this._poblacionMuerta;
			}
			if (this._poblacionMuerta >= this._poblacionTotal) {
				this._destruido = true;
				this._poblacionMuerta = this._poblacionTotal;
				this._poblacionInfectada = 0;
				this._emitter.paisDestruido(this._code);
			}
		}
		
	}

	/**
	 * Calcula y acumula la cantidad de contagiados
	 * @return {[type]} [description]
	 */
	calcularTasaContagio() {
		

		if (!this._enfermedad.curaCompleta) {
			var infectadosDt = this.calcularPoblacionInfectadaDt();
			//console.log('tasa calcularTasaContagio() ');
			
			// Verifico que no sigan infectandose mas personas que las que hay
			// en total
			if (this._poblacionSana > 0) {
				// alert(`entro, resta: ${this._poblacionInfectada + infectadosDt}`);
				this._tasaTransmision = this._tasaTransmision + infectadosDt;
				//console.log('_tasaTransmision calcularTasaContagio() '+ tasa);

				this._poblacionInfectada += Math.floor(this._tasaTransmision);
				this._poblacionSana -= Math.floor(this._tasaTransmision);
			} else {
				// Hago que la poblacion infectada sea toda la poblacion de pais
				this._poblacionInfectada = this._poblacionTotal;
				this._poblacionSana = 0;
			}
		}

		if (this._poblacionMuerta == 0 && this._enfermedad._tasaMortalidad > 0 && this._poblacionInfectada > 0) {
			this._emitter.primeraMuerte(this._code);
			this._poblacionMuerta = 1;
			this._poblacionInfectada -= 1;
		}	

		// this._enfermedad.revisarTasaTransmision();
		this.calcularMortalidad();

		return this._poblacionInfectada;
	}

	infectarPaisVecino(paises, paisesContagiados) {

		let contagiado = 0;
		if (this.poblacionInfectada > this.indiceContagioVecino) {
			for (var i = 0; i < this._vecinos.length && contagiado == 0; i++) {
				var paisInfectar = this._vecinos[i];
				if (paisesContagiados.find((elem, index, arr) => elem._code == paisInfectar.code) == undefined) {

					var pais = paises.find((elem, index, arr) => elem._code == paisInfectar.code);

					pais.contagiarPais(this._enfermedad);
					paisesContagiados.push(pais);
					contagiado = 1;

				}
			}
		}

		if (contagiado === 1) {
			this._indiceContagioVecino += Math.floor((this._poblacionTotal * 0.2));
		}
		return contagiado;
	}

}

module.exports = Pais;