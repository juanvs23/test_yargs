//importar paquetes
//yargs te permite crear un sistema de paramtros por consola mediante flags
//Con process.argv
/*[
    'C:\\nodejs\\node.exe',
    'd:\\proyectos\\node\\bases-node\\app',
    'hola',
    '--diseno',
    '10',
    '-e',
    '50'
  ]*/
//con yargs 
/*{ _: [ 'hola' ], diseno: 10, e: 50, '$0': 'app' }*/

const opts= {
    base:{
        demand:true,
        alias:'b',
        description:'Numero por el cual se multiplicara'
    },
    limite:{
        alias:'l',
        default:10,
        description:'Rango de la tabla de multiplicacion',
    },
    version:{
        alias:'v'
    }
};
const argv = require('yargs')
  //command define los commandos
   .command('listar', 'imprime en consola la tabla',opts)
    .command('crear','crea un archivo txt con los datos ingresados',opts)
    .help()
    .argv; 
    module.exports = { argv };