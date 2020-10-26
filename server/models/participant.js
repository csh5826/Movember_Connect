const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ParticipantSchema = new Schema({
    name: String,
    longitude: Number,
    latitude: Number,
    cause: String,
    pledge: Number, 
    story: String

})

module.exports = mongoose.model('Participant', ParticipantSchema)