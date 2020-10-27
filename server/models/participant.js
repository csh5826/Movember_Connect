const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ParticipantSchema = new Schema({
    name: String,
    latitude: Number,
    longitude: Number,
    cause: String,
    pledge: Number, 
    story: String

})

module.exports = mongoose.model('Participant', ParticipantSchema)

//{"_id":{"$oid":"5f9765730f85c0342b30809c"},
//"name":"Franco","latitude":"35.991947",
//"longitude":"-78.903871",
//"pledge":49047,
//"story":"Alias minus quia et. Est perspiciatis animi beatae. Ea porro qui cupiditate iste dolore porro rerum. Ut aperiam et facere. Quos dicta perspiciatis et at expedita delectus enim. Totam deserunt reiciendis provident ratione id optio harum cumque non."
//,"__v":0}