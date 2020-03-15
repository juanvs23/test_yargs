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

const argv = require('yargs')
  //command define los commandos
   .command('listar', 'imprime en consola la tabla', {
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
    })
    .command('crear','crea un archivo txt con los datos ingresados',{
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
    })
    .help()
    .argv; 




//importar tu aplicacion y destructura tus funciones
const { CrearTabla,ListaTabla } = require('./multiplicar'),
    //tomo la funcion process para su parametro argv para pasar parametros desde la consola    
    comando = argv._[0],
    limite=argv.limite,
    base=argv.b;
    //console.log(base,limite,comando);
    //pasas el parametro 

    switch (comando) {
        case 'crear':
            CrearTabla(base,limite)
                .then(archivo => { console.log(`El ${archivo} ha sido creado`) })
                .catch(err => { console.log(`el error es ${err}`) }); 
            break;
        case 'listar':
            ListaTabla(base,limite)
               
            break;
        default:
            console.log('Comando no reconocido, por favor ejecutar "node app --help"');
            
            break;
    } 
    
   