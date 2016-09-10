const Pais = require('./pais.js');


const creacion = (enfermedad, Emitter) => {
	var paises = [];

	paises.push(new Pais('VE', 3, ['urbano', 'calido', 'humedo'], 30000000,Emitter));
	paises.push(new Pais('PY', 2, ['rural', 'calido', 'humedo'], 6802000, Emitter));
	paises.push(new Pais('CO', 3, ['rural', 'templado', 'humedo'], 47120000, Emitter));
	paises.push(new Pais('CL', 4, ['urbano', 'frio', 'arido'], 17620000, Emitter));
	paises.push(new Pais('SR', 1, ['rural', 'calido', 'humedo'], 539276, Emitter));
	paises.push(new Pais('BO', 2, ['rural', 'frio', 'arido'], 10670000, Emitter));
	paises.push(new Pais('EC', 3, ['rural', 'frio', 'humedo'], 15740000, Emitter));
	paises.push(new Pais('AR', 4, ['urbano', 'frio', 'humedo'], 41450000, Emitter));
	paises.push(new Pais('GY', 3, ['rural', 'calido', 'humedo'], 799613, Emitter));
	paises.push(new Pais('BR', 5, ['rural', 'calido', 'humedo'], 200400000, Emitter));
	paises.push(new Pais('PE', 3, ['rural', 'frio', 'arido'], 30380000, Emitter));
	paises.push(new Pais('UY', 4, ['rural', 'calido', 'humedo'], 3000000, Emitter));

	return paises;

}

module.exports = creacion;


