const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        console.log(`==========================`.green);
        console.log(`==== TABLA DE ${base}====`.green);
        console.log(`==========================`.green);

        for (let i = 0; i <= limite; i++) {
            console.log(`${base}  * ${i} = ${i*base}\n`);
        }

    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número.`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base}  * ${i} = ${i*base}\n`;
        }

        fs.writeFile(`Tablas/Tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}-al-${limite}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}