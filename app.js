const argv             = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

require('colors');

console.clear();

crearArchivo(argv)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
  .catch((err) => console.log(err));

//NOTE: Versión con callback
// fs.writeFile(`tabla-${base}.txt`, salida, (err => {
//   if (err) throw err;
//   console.log(`Archivo tabla-${base}.txt creado con éxito`);
// }))

//NOTE: Versión sincrona
// fs.writeFileSync(`tabla-${base}.txt`,salida);

// console.log(`Archivo tabla-${base}.txt creado con éxito`);
