const axios = require('axios');

module.exports = {
    geoCode(ip, callback) {
        return axios.get(`http://api.ipstack.com/${ip}?access_key=c62ae9e59e38de710319b1e93f08cc43&format=1`);
    }
}
