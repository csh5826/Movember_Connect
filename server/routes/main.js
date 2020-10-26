const router = require('express').Router()
const { response } = require('express')
const faker = require('faker')
const Participant = require('../models/participant')

router.get('/generate-fake-data', (req, res, next) => {
    for (let i = 0; i < 5; i++) {
      let participant = new Participant()
  
      participant.name = faker.name.firstName()
      participant.pledge = faker.random.number()
      participant.story = faker.lorem.sentences()
  
      participant.save((err) => {
        if (err) throw err
      })
    }
    res.end()
  })

  module.exports = router