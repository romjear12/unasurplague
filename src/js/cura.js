"use strict";

/**
 * Clase Cura
 *
 */
class Cura {

	/**
	 * Constructor de la clase
	 */
	constructor(emitter) {

		this._progreso = 1;
		this._tasaIncremento = 0;
		this._emitter = emitter;

		// Escucha si se agregó un nuevo síntoma a la 
		// enfermerdad
		this._emitter.on('nuevo-sintoma', (sintoma) => {
			// Si la cura ya empezó a desarrollarse
			if (this._progreso > 1) {

				// Disminuyo el progreso tanto porciento segun sea 
				// la fatalidad del nuevo síntoma
				this._progreso -= this._progreso * (sintoma.mortalidad / 100);

			}
			// alert('nuevo-sintoma');
		});

		this._emitter.on('aumento-tasa-mortalidad', (tasa) => {
			// Igualo las tasas para que el crecimiento sea equivalente
			this._tasaIncremento = tasa;
		});

	}

	get progreso() {
		return this._progreso;
	}


	/**
	 * Aumenta el progreso de la cura dependiendo del parámetro
	 * @param  {Int} porciento Porcentaje de aumento de la Cura en base 100
	 * @return {Int}           progreso
	 */
	aumentarProgreso(porciento) {

		this._progreso += this._progreso * this._tasaIncremento;

		if (this._progreso == 100) {
			this._emitter.curaCompleta();
		}

		return this._progreso;
	}
}

module.exports = Cura;