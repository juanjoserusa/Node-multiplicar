
const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar')

console.clear();


// Forma con errores porque va por posicion
// const [ , ,arg3 = 'base=5'] = process.argv
// const[ , base = 5 ] =arg3.split('=')

// console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log('Ha fallado la creacion del archivo', err))


