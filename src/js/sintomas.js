
var sintomas = () => {
	
	return [
		{
			cod: "fi",
			nombre:'Fiebre',
			transmision:1,
			muerte:0,
			costo:10,
			evolucion: [
				{
					cod: "fi2",
					nombre:'Fiebre II',
					transmision:3,
					muerte:0,
					costo:20
				},
				{
					cod: "fi3",
					nombre:'Fiebre III',
					transmision:5,
					muerte:1,
					costo:30
				}
			]
		},
		{
			cod: "dia",
			nombre:'Diarrea',
			transmision:1,
			muerte:0,
			costo:8
		},
		{	
			cod: "tos",
			nombre:'Tos',
			transmision:1,
			muerte:0,
			costo:5
		},
		{
			cod: "est",
			nombre:'Estornudos',
			transmision:2,
			muerte:0,
			costo:8
		},
		{
			cod: "inm",
			nombre:'Inmunosupresión',
			transmision:2,
			muerte:25,
			costo:30
		},
		{
			cod: "qui",
			nombre:'Quistes',
			transmision:2,
			muerte:0,
			costo:15
		},
		{
			cod: "hem",
			nombre:'Hemorragia interna',
			transmision:2,
			muerte:20,
			costo:28
		},
		{
			cod: "vom",
			nombre:'Vomito',
			transmision:2,
			muerte:0,
			costo:15
		},
		{
			cod: "fall",
			nombre:'Fallo orgánico total',
			transmision:4,
			muerte:30,
			costo:40
		}

	];

}

module.exports = sintomas;