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

//"name":"Franco","latitude":"35.991947",
//"longitude":"-78.903871",
//"pledge":49047,
//"story":"Alias minus quia et. Est perspiciatis animi beatae. Ea porro qui cupiditate iste dolore porro rerum. Ut aperiam et facere. Quos dicta perspiciatis et at expedita delectus enim. Totam deserunt reiciendis provident ratione id optio harum cumque non."
