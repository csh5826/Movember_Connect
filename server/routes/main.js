const router = require('express').Router()
const { response } = require('express')
const faker = require('faker')
const participant = require('../models/participant')
const Participant = require('../models/participant')

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

// get the list of all participants
router.get('/participants', (req,res, next) => {

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