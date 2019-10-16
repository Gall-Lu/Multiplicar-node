const argv = require('./Config/yargs').argv;
const colors = require('colors');
const { listarTabla, crearArchivo } = require('./Multiplicar/Multiplicar');
// La palabra const y llaves es una destructuracion

// module es un objeto global.
// console.log(module);

// console.log(process);
// console.log(process.argv);
// let argv2 = process.argv;

// console.log('Limite', argv.limite);
// console.log(argv2);


// let parametro = argv[2];
// let base = parametro.split('=')[1];



let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}




// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));