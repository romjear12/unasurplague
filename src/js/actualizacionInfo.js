
const actualizarInfo = (paisesContagiados, cura) => {

	var infectados = paisesContagiados.reduce((c, pais) => c + pais.poblacionInfectada, 0);
	var muertos = paisesContagiados.reduce((c, pais) => c + pais.poblacionMuerta, 0);

	var cura = cura.progreso;

	return {
		infectados: infectados,
		muertos: muertos,
		cura: cura
	};

};

module.exports = actualizarInfo;