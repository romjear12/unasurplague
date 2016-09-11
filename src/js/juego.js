var Pais = require('../js/pais.js');
var Enfermedad = require('../js/enfermedad.js');
var MyEmitter = require('../js/MyEmitter.js');
var Cura = require('../js/cura.js');
var creacion = require('../js/creacionPaises.js');
var Emitter = new MyEmitter();

	var poblacionInfectada = 0;
	var poblacionMuerta = 0;
	var cura = new Cura(Emitter);
	var enfermedad = new Enfermedad('nombre', Emitter);
	enfermedad._emitter.on('contagiado', (pais) => {
		alert(`${pais.code} se contagió`);
	});

	// Para agregar un nuevo sintoma
	// enfermedad.agregarSintoma({sintoma:'nombre', transmision:0-100, mortalidad:0-100})
	// 
	// Para traer la informacion del banner inferior
	// var actualizarInfo = require('../js/actualizarInfo.js');
	// actualizarInfo(paisesContagiados, cura);

	var paises = creacion(enfermedad, Emitter);

	//cargar tabla default
	paises.map( (pais) => {
		$('#data tbody').append('<tr id='+pais._code+'><td>'+pais._code+'</td><td>'+pais._poblacionTotal+'</td><td>'+pais._poblacionSana+'</td><td>'+pais._poblacionInfectada+'</td></tr>');
	});

	var paisesContagiados = [];

	var ColorLuminance = function (hex, lum) {

			// validate hex string
			hex = String(hex).replace(/[^0-9a-f]/gi, '');
			if (hex.length < 6) {
				hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
			}
			lum = lum || 0;

			// convert to decimal and change luminosity
			var rgb = "#", c, i;
			for (i = 0; i < 3; i++) {
				c = parseInt(hex.substr(i*2,2), 16);
				c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
				rgb += ("00"+c).substr(c.length);
			}

			return rgb;
	}

	var increasingRed = function(pais) {

 		var obj = {};
		color = pais['color'];
		colorIncreased = ColorLuminance(color, -.01);
 		pais['color'] = colorIncreased;
 		obj[pais._code] = colorIncreased;
		map.series.regions[0].setValues(obj);
	}

	var actualizarData = function(pais) {
		$('#'+pais._code+'').replaceWith('<tr id='+pais._code+'><td>'+pais._code+'</td><td>'+pais._poblacionTotal+'</td><td>'+pais._poblacionSana+'</td><td>'+pais._poblacionInfectada+'</td></tr>')
	}

	$( function(){
		// $('#map').vectorMap({map: 'south_america_mill'});
		// $('#map').vectorMap('set', 'colors', {ve: '#0000ff'});
		
		$(function(){
			var palette = ['#66C2A5', '#FC8D62', '#8DA0CB', '#E78AC3', '#A6D854'];

			generateColors = function(key){
				var colors = {};
				colors[key] = palette[0];
				return colors;
			};

			map = new jvm.Map({
				map: 'south_america_mill',
				container: $('#map'),
				backgroundColor: "#FFF",
				series: {
			  regions: [{
			    attribute: 'fill',
			    values: {
			        PY:'#A8BFA6',
			        CO:'#A8BFA6',
			        VE:'#A8BFA6',
			        CL:'#A8BFA6',
			        SR:'#A8BFA6',
			        BO:'#A8BFA6',
			        EC:'#A8BFA6',
			        AR:'#A8BFA6',
			        GY:'#A8BFA6',
			        BR:'#A8BFA6',
			        PE:'#A8BFA6',
			        UY:'#A8BFA6',
			    }
			  }]
				},
				onRegionClick: function(event, code) {
					var pais = paises.find( (pais) => code === pais._code );
					pais.color = '#f66';
					var obj = {};
 					obj[pais._code] = pais.color;
					map.series.regions[0].setValues(obj);
					paisesContagiados.push(pais);
					pais.contagiarPais(enfermedad);
				}
			});

			setInterval(() => {
		  		if(paisesContagiados.length > 0)
					paisesContagiados.map( (pais) => {
						pais.calcularTasaContagio();
						pais.infectarPaisVecino(paises, paisesContagiados);
						increasingRed(pais);
						actualizarData(pais);
					});
			}, 1000);
		  
		})
	})