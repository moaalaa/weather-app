const request = require('request');

module.exports = {
    geoWeather(latitude, longitude, callback) {
        request({
            url: `https://api.darksky.net/forecast/a136e74c36a78e5abde83a05852288dc/${latitude},${longitude}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                callback("Unable To Connect To Server", {});
            }

            if (body.error) {
                callback(body.error, {});
            } else {
                callback(undefined, body.currently);
            }

        })
    }
}
