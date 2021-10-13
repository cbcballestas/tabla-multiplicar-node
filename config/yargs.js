const argv = require('yargs')
  .options({
    'b': {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Base tabla multiplicar'
    },
    'l': {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Flag listar tabla de multiplicar'
    },
    'h': {
      alias: 'hasta',
      type: 'number',
      demandOption:false,
      describe: 'Límite tabla de multiplicar'
    }
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw 'La base DEBE ser un número';
    return true; //NOTE: Siempre se DEBE retornar true si NO hay errores
  })
  .argv;

module.exports = argv;