const request = require('request');

module.exports = {
    geoWeather(latitude, longitude, callback) {
        return new Promise((resolve, reject) => {
            request({
                url: `https://api.darksky.net/forecast/a136e74c36a78e5abde83a05852288dc/${latitude},${longitude}`,
                json: true
            }, (error, response, body) => {
                if (error) {
                    reject("Unable To Connect To Server");
                }
    
                if (body.error) {
                    reject(body.error);
                } else {
                    resolve(body.currently);
                }
                    
            });
        });
    }
}
