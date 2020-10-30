const mongoose = require('mongoose')
const geoCoder = require('../utils/geocoder');
const Schema = mongoose.Schema

const ParticipantSchema = new Schema({
    name: String,
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
        type: {type: String, 
            default: 'Point'},
        coordinates: {type: [Number], 
            default:[0, 0]
        },
        formattedAddress: String
    },
    cause: String,
    pledge: Number, 
    story: String,
    time : {type: Date, 
        default: Date.now 
    }

})

// Before saving, convert address to geoCode
ParticipantSchema.pre('save', async function(next) {
    const loc = await geoCoder.geocode(this.address);
    console.log(this.address)
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    };

    //Do not save address
    this.address = undefined;
    next();
});

module.exports = mongoose.model('Participant', ParticipantSchema)

