"use strict";

/**
 * Clase Cura
 *
 */
class Cura {

	/**
	 * Constructor de la clase
	 */
	constructor() {

		this.progreso = 0;

	}

	/**
	 * Aumenta el progreso de la cura dependiendo del parámetro
	 * @param  {Int} porciento Porcentaje de aumento de la Cura en base 100
	 * @return {Int}           progreso
	 */
	aumentarProgreso(porciento) {

		this.progreso = this.progreso + (porciento / 100);
		return this.progreso;
	}
}

module.exports = Cura;