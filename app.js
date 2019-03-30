const request   = require('request');
const yargs     = require('yargs');

const geo = require('./geo');

const argv = yargs
    .options({
        ip: {
            demand: true,
            alias: 'ip-address',
            describe: 'Ip Address To Fetch Weather',
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geo.geoCode(argv.ip, (error, result) => {
    if (error) {
        console.log(error);
        
    } else {
        console.log(`Address: ${result.address}`);
        console.log(`Latitude: ${result.lat}`);
        console.log(`Longitude: ${result.long}`);
    }
});
