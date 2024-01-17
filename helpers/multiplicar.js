const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        const nombreArchivo = `tabla-${base}.txt`


        let salida = ''

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('==========='.rainbow);
            console.log(`Tabla del ${base}`.green);
            console.log('==========='.rainbow);
            console.log(salida)
        }

        fs.writeFileSync(`./salida/${nombreArchivo}`, salida,)

        console.log(`${nombreArchivo} creada`);

        return nombreArchivo

    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}