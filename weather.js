const axios = require('axios');

module.exports = {
    geoWeather(latitude, longitude, callback) {
        return axios.get(`https://api.darksky.net/forecast/a136e74c36a78e5abde83a05852288dc/${latitude},${longitude}`);
        // return new Promise((resolve, reject) => {
        //     request({
        //         url: ,
        //         json: true
        //     }, (error, response, body) => {
        //         if (error) {
        //             reject("Unable To Connect To Server");
        //         }
    
        //         if (body.error) {
        //             reject(body.error);
        //         } else {
        //             resolve(body.currently);
        //         }
                    
        //     });
        // });
    }
}
