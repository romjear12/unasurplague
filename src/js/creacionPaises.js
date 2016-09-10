const Pais = require('./pais.js');


const creacion = (enfermedad, Emitter) => {
	var paises = [];

	paises.push(new Pais('VE', 3, ['urbano', 'calido', 'humedo'], 30000000, 
		[{code:'CO', peso:4},{code:'GY',peso:1},{code:'BR',peso:2}], 
	Emitter));
	paises.push(new Pais('PY', 2, ['rural', 'calido', 'humedo'], 6802000, 
		[{code:'BO',peso:2},{code:'BR',peso:3},{code:'AR',peso:4}], 
	Emitter));
	paises.push(new Pais('CO', 3, ['rural', 'templado', 'humedo'], 47120000, 
		[{code:'VE',peso:5},{code:'PE',peso:4},{code:'EC',peso:3},{code:'BR',peso:2}],
		Emitter));
	paises.push(new Pais('CL', 4, ['urbano', 'frio', 'arido'], 17620000, 
		[{code:'PE',peso:3},{code:'BO',peso:2},{code:'AR',peso:4}],
		Emitter));
	paises.push(new Pais('SR', 1, ['rural', 'calido', 'humedo'], 539276, 
		[{code:'GY',peso:4},{code:'BR',peso:2}],
		Emitter));
	paises.push(new Pais('BO', 2, ['rural', 'frio', 'arido'], 10670000, 
		[{code:'BR',peso:5},{code:'PY',peso:2},{code:'PE',peso:4},{code:'CL',peso:3},{code:'AR',peso:1}],
		Emitter));
	paises.push(new Pais('EC', 3, ['rural', 'frio', 'humedo'], 15740000, 
		[{code:'CO',peso:4},{code:'PE',peso:2}] ,Emitter));
	paises.push(new Pais('AR', 4, ['urbano', 'frio', 'humedo'], 41450000, 
		[{code:'UY',peso:4},{code:'BR',peso:5},{code:'PY',peso:3},{code:'BO',peso:1},{code:'CL',peso:2}], Emitter));
	paises.push(new Pais('GY', 3, ['rural', 'calido', 'humedo'], 799613, 
		[{code:'VE',peso:3},{code:'SR',peso:4},{code:'BR',peso:2}] ,Emitter));
	paises.push(new Pais('BR', 5, ['rural', 'calido', 'humedo'], 200400000, 
		[{code:'AR',peso:9},{code:'VE',peso:7},{code:'CO',peso:8},{code:'PE',peso:6},{code:'PY',peso:5},{code:'UY',peso:4},{code:'BO',peso:3},{code:'GY',peso:2},{code:'SR',peso:1}] ,Emitter));
	paises.push(new Pais('PE', 3, ['rural', 'frio', 'arido'], 30380000, 
		[{code:'CO',peso:4},{code:'EC',peso:3},{code:'CL',peso:2},{code:'BR',peso:5},{code:'BO',peso:1}] ,Emitter));
	paises.push(new Pais('UY', 4, ['rural', 'calido', 'humedo'], 3000000, 
		[{code:'AR',peso:4},{code:'BR',peso:3}] ,Emitter));

	return paises;

}

module.exports = creacion;


