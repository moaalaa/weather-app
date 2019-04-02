const request   = require('request');
const yargs     = require('yargs');

const geo = require('./geo');
const weather = require('./weather');

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

geo.geoCode(argv.ip)
    .then(result => {
    
        console.log(`Address: ${result.address}`);
        console.log(`Latitude: ${result.lat}`);
        console.log(`Longitude: ${result.long}`);
        
        console.log('------------------------------');

        weather.geoWeather(result.lat, result.long).then(result => {
            console.log(`It's Currently ${result.temperature} and weather is ${result.summary}, It's Feel Like ${result.apparentTemperature}`);
        })
        .catch(error => {
            console.log(error);
        });
    })
    .catch(error => {
        console.log(error);    
    });