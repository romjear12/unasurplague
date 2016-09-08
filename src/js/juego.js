var Pais = require('../js/pais.js');
	var EventEmitter = require('events');
	var inherits = require('util').inherits;

	var venezuela = new Pais(1,2,3,4,5,6);

	var countries = {
		VE: {
			color: 'F66'
		}
	}
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

	var increasingRed = function() {


		color = countries['VE']['color'];
		// console.log(color);
		colorIncreased = ColorLuminance(color, -.01);
		// console.log(colorIncreased);

 		countries['VE']['color'] = colorIncreased;

		map.series.regions[0].setValues({VE: colorIncreased});

		// console.log('exec');

	}

	var exec = function() {
		setInterval(increasingRed, 100);
	}
	$( function(){
		// $('#map').vectorMap({map: 'south_america_mill'});
		// $('#map').vectorMap('set', 'colors', {ve: '#0000ff'});
		
		$(function(){
		  var palette = ['#66C2A5', '#FC8D62', '#8DA0CB', '#E78AC3', '#A6D854'];

	      generateColors = function(key){
	        var colors = {};
			colors[key] = palette[Math.floor(Math.random()*palette.length)];
	        return colors;
	      };

		  map = new jvm.Map({
		    map: 'south_america_mill',
		    container: $('#map'),
		    series: {
		      regions: [{
		        attribute: 'fill'
		      }]
		    },
		    onRegionClick: function(event, code) {
		    	console.log(code);
		    	obj = generateColors(code);
		    	map.series.regions[0].setValues(obj);
		    }
		  });

		  
		})
	})