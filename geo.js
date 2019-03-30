const request = require('request');

module.exports = {
    geoCode(ip, callback) {
        request({
            url: `http://api.ipstack.com/${ip}?access_key=c62ae9e59e38de710319b1e93f08cc43&format=1`,
            json: true
        }, (error, response, body) => {
            if (error) {
                callback("Unable To Connect To Server", {});
            }

            if (!!body.type) {
                callback(undefined, {
                    lat: body.latitude,
                    long: body.longitude,
                    address: `${body.region_name}, ${body.country_name}`
                });
            } else {
                callback("Something Wont Wrong Maybe The Ip Address Is Invalid", {});
            }

        })
    }
}
