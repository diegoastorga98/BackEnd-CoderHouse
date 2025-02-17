// Realizar la operación del desafío anterior, esta vez usando la dependencia YARGS en lugar de minimist.


const yargs = require('yargs/yargs')(process.argv.slice(2))

const { modo, puerto, debug, _ } = yargs
    .boolean('debug')
    .alias({
        m: 'modo',
        p: 'puerto',
        d: 'debug'
    })
    .default({
        modo: 'prod',
        puerto: 0,
        debug: false
    })
    .argv

console.log({ modo, puerto, debug, otros: _ });