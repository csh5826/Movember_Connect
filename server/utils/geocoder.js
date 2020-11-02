const NodeGeoCoder = require('node-geocoder');

const GEOCODER_PROVIDER = 'mapquest'
const GEOCODER_API_KEY = 'ItFths8HBUmFNELPCbDBO4zQVTyGvoWM'

const options = {
    provider: GEOCODER_PROVIDER,
    httpAdapter: 'https',
    apiKey: GEOCODER_API_KEY,
    formatter: null
};

const geocoder = NodeGeoCoder(options);

module.exports = geocoder;