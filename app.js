const argv =require('./config/config.js').argv;


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
    
  