const fs = require('fs')

let data = ''
let ListaTabla=(base, limite=10)=>{
    console.log(base,limite);
    for (let i = 0; i <= limite; i++) {
        data += `${base} * ${i} =${base*i}\n`;

    }
    console.log(data)

};
let CrearTabla = (base, limite=10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero')
            return
        }

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} =${base*i}\n`

        }

        fs.writeFile(`./textos/tabla-${base}-al-${limite}.txt`, data, 'utf-8', (err) => {
            if (err) { reject(err) } else {
                resolve(`tabla-${base}-al-${limite}.txt`)
                console.log(data)
            }
            //console.log(`El archivo tabla-${base} ha sido creado`);
        });
    })

}
module.exports = { CrearTabla,ListaTabla }