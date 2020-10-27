const router = require('express').Router()
const { response } = require('express')
const faker = require('faker')
const Participant = require('../models/participant')

// Participant.create({
//     name: 'Joe Dirt',
//     location: {
//         type: 'Point',
//         coordinates: [-78.455555, 37.111432]
//     },
//     cause: "Testicular cancer",
//     pledge: 165,
//     story:"Alias minus quia et. Est perspiciatis animi beatae. Ea porro qui cupiditate iste dolore porro rerum. Ut aperiam et facere. Quos dicta perspiciatis et at expedita delectus enim. Totam deserunt reiciendis provident ratione id optio harum cumque non."
// })

// generates fake data for participants
router.get('/generate-fake-data', (req, res, next) => {
    for (let i = 0; i < 5; i++) {
      let participant = new Participant()
  
      participant.name = faker.name.firstName()
      participant.pledge = faker.commerce.price()
      participant.story = faker.lorem.sentences()
  
      participant.save((err) => {
        if (err) throw err
      })
    }
    res.end()
  })

//TODO 
// figure out how to query based on certain coordinate locations

router.get('/participants', (req,res, next) => {
    //optional queries to filter participants by
    const cause = req.query.cause;
    const pledge = req.query.pledge;
    let query = {};
    let x = {};

    // if query is sent, add the query to our query object
    if (cause) {
        query.cause = cause
    }
    if (pledge) {
        if (pledge === 'high'){
            x = {$gte:100}
        }
        if (pledge === 'low'){
            x = {$lt:100}
        }
    }
    // if no pledge param, make sure all participants are grabbed
    if (!pledge) {
            x = {$gte:0}
    }
    Participant
    .find(query)
    .find({pledge: x})
    .exec((err, participants)=>{
        Participant.countDocuments().exec((err, count) =>{
            Participant.aggregate([{$group: {_id: null, total: {$sum: "$pledge"}}}]).exec((err, total) =>{
                if (err) throw err
                else {
                let info = {};
                info.totalParticipants = count
                info.totalPledged = total
                info.participants = participants
                res.send(info)
                }
            })            
        })
  })
})

// create a new participant in the db
router.post('/participants', (req,res, next) => {
    let participant = new Participant(req.body);
    participant.save()
    res.send(participant)
})

// get participant by id
  router.get('/participants/:participant', (req, res, next) => {
    let participantId = req.params.participant

  Participant
    .findById(participantId).exec((err, participant) => {
        if (err || participant._id === null) {
            res.sendStatus(400)
        } else {
            res.send(participant);
        }
    })
})

  module.exports = router