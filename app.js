const request   = require('request');
const yargs     = require('yargs');

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

request({
    url: `http://api.ipstack.com/${argv.ip}?access_key=c62ae9e59e38de710319b1e93f08cc43&format=1`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log("Unable To Connect To Server");
        return;
    }

    if (!! body.type) {
        console.log(`Address: ${body.region_name}, ${body.country_name}`);
        console.log(`Latitude: ${body.latitude}`);
        console.log(`Longitude: ${body.longitude}`);
    } else {
        console.log("Something Wont Wrong Maybe The Ip Address Is Invalid");
    }
    
})