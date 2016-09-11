"use strict";
// var EventEmitter = require('events');

class Enfermedad {

	constructor(nombre,emitter, paises) {
		// super();
		this._nombre 		= nombre;
		this._tasaTransmision = 0.01;
		this._tasaMortalidad = 0;
		// rural | urbano
		this._tipoPoblacion = [];
		this._sintomas 		= [];
		// arido | humedo 
		this._transmision 	= [];
		// calido | frio
		this._habilidades 	= [];

		this._afeccion 		= [];
		this._emitter = emitter;
		this._paises = paises;

		this._emitter.on('cura-completa', () => {
			alert('cura-completa');
		});

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
	set tasaTransmision(tasa) {
		this._tasaTransmision = tasa;
	}

	agregarTipoPoblacion(tipoPoblacion) {
		this._tipoPoblacion.push(tipoPoblacion);
		return;
	}
	agregarHabilidad(habilidad) {
		this._habilidades.push(habilidad);
		return;
	}
	agregarTransmision(transmision) {
		this._transmision.push(transmision);
		return;
	}

	/**
	 * Agrega síntoma a la enfermedad
	 * @param  {Objeto} sintoma sintoma, transmision, mortalidad
	 * @return {[type]}         [description]
	 */
	agregarSintoma(sintoma) {

		this._sintomas.push(sintoma.sintoma);

		this._tasaTransmision += (sintoma.transmision / 100);
		this._tasaMortalidad += (sintoma.mortalidad / 100);


		this._emitter.nuevoSintoma(sintoma);

		// Hago saber que mi enfermedad ahora es mortal
		if (sintoma.mortalidad > 0) {
			this._emitter.aumentoTasaMortalidad(this._tasaMortalidad);
		}
	}

	revisarTasaTransmision() {



		// let tasa =  (totalContagiados / totalPoblacion);
		// this._tasaTransmision =  this._tasaTransmision + tasa;
		// return this._tasaTransmision;

	} 

}

module.exports = Enfermedad;