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

geo.geoCode(argv.ip, (error, result) => {
    if (error) {
        console.log(error);
        
    } else {
        console.log(`Address: ${result.address}`);
        console.log(`Latitude: ${result.lat}`);
        console.log(`Longitude: ${result.long}`);
        
        console.log('------------------------------');

        weather.geoWeather(result.lat, result.long, (error, result) => {
            if (error) {
                console.log(error);

            } else {
                console.log(`It's Currently ${result.temperature} and weather is ${result.summary}, It's Feel Like ${result.apparentTemperature}`);
                
            }
        })

    }
});



// https://api.darksky.net/forecast/a136e74c36a78e5abde83a05852288dc/37.8267,-122.4233