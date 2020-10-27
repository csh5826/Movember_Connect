const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ParticipantSchema = new Schema({
    name: String,
    location: {
        type: {type: String, default: 'Point'},
        coordinates: {type: [Number], default:[0, 0], required: true}
    },
    cause: String,
    pledge: Number, 
    story: String

})

// geoJSON in mongoose, make sure you put LONGITUDE first, then LATITUDE

module.exports = mongoose.model('Participant', ParticipantSchema)

