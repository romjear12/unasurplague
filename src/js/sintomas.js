
var sintomas = () => {
	
	return [
		{
			nombre:'Fiebre',
			transmision:1,
			muerte:0,
			costo:10
		},
		{
			nombre:'Fiebre II',
			transmision:3,
			muerte:0,
			costo:20
		},
		{
			nombre:'Fiebre III',
			transmision:5,
			muerte:1,
			costo:30
		},
		{
			nombre:'Diarrea',
			transmision:1,
			muerte:0,
			costo:8
		},
		{
			nombre:'Tos',
			transmision:1,
			muerte:0,
			costo:5
		},
		{
			nombre:'Estornudos',
			transmision:2,
			muerte:0,
			costo:8
		},
		{
			nombre:'Inmunosupresión',
			transmision:2,
			muerte:25,
			costo:30
		},
		{
			nombre:'Quistes',
			transmision:2,
			muerte:0,
			costo:15
		},
		{
			nombre:'Hemorragia interna',
			transmision:2,
			muerte:20,
			costo:28
		},
		{
			nombre:'Vomito',
			transmision:2,
			muerte:0,
			costo:15
		},
		{
			nombre:'Fallo orgánico total',
			transmision:4,
			muerte:30,
			costo:40
		}

	];

}

module.exports = sintomas;