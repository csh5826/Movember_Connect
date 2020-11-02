const router = require('express').Router()
const { response } = require('express')
const faker = require('faker')
const Participant = require('../models/participant')


// generates fake data for participants
router.get('/generate-fake-data', (req, res, next) => {
    for (let i = 0; i < 100; i++) {
      let participant = new Participant()
      // 'Men\'s mental health awareness'
      // 'Testicular cancer'
      // 'Prostate cancer'
      participant.name = faker.name.firstName()
      participant.address = faker.address.streetAddress()
      participant.cause = 'Prostate cancer'
      participant.pledge = 1200
      // Math.floor(Math.random() * 600)
      participant.story = faker.lorem.sentences()
      participant.time = faker.date.between('2020-11-01', '2020-11-31')
  
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

router.post('/participants', async (req,res, next) => {
  try {
      const participant = await Participant.create(req.body);

      return res.status(200).json({
          success: true,
          data: participant
      });
  } catch (err) {
      console.log(err);
      res.status(500);
  }
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

// get specific cause data
// router.get('/causedata', (req, res, next) => {
//   // required query
//   const cause = req.query.cause;
//   let query = {};
//   query.cause = cause;
//     Participant.countDocuments(query).exec((err, count) =>{
//       Participant.aggregate([{$match: 
//         {'cause': cause}},
//         {$group: {_id: null, total: {$sum: "$pledge"}}}])
//         .exec((err, total) =>{
//           if (err) throw err
//           else {
//           let info = {};
//           info.specificTotalParticipants = count
//           info.specificTotalPledged = total
//           info.participantsCause= cause
//           res.send(info)
//           }
//         })
//     })
// })

//get specific cause data
router.get('/causedata', (req, res, next) => {
  // required query
  const cause = req.query.cause;
  let query = {};
  query.cause = cause;
      Participant.aggregate([{$match: 
        {'cause': cause, 'time': {$gte: new Date('2020-11-01T00:00:00.000Z'), $lt: new Date('2020-11-08T00:00:00.000Z')}}},
        {$group: {_id: null, totalPledgedOne: {$sum: "$pledge"}, totalCountOne: {$sum: 1}}}])
        .exec((err, weekOne) =>{
          Participant.aggregate([{$match: 
            {'cause': cause, 'time': {$gte: new Date('2020-11-08T00:00:00.000Z'), $lt: new Date('2020-11-15T00:00:00.000Z')}}},
            {$group: {_id: null, totalPledgedTwo: {$sum: "$pledge"}, totalCountTwo: {$sum: 1}}}])
            .exec((err, weekTwo) =>{
              Participant.aggregate([{$match: 
                {'cause': cause, 'time': {$gte: new Date('2020-11-15T00:00:00.000Z'), $lt: new Date('2020-11-22T00:00:00.000Z')}}},
                {$group: {_id: null, totalPledgedThree: {$sum: "$pledge"}, totalCountThree: {$sum: 1}}}])
                .exec((err, weekThree) =>{
                  Participant.aggregate([{$match: 
                    {'cause': cause, 'time': {$gte: new Date('2020-11-22T00:00:00.000Z'), $lt: new Date('2020-11-29T00:00:00.000Z')}}},
                    {$group: {_id: null, totalPledgedFour: {$sum: "$pledge"}, totalCountFour: {$sum: 1}}}])
                    .exec((err, weekFour) =>{
                      Participant.aggregate([{$match: 
                        {'cause': cause, 'time': {$gte: new Date('2020-11-29T00:00:00.000Z'), $lt: new Date('2020-12-01T00:00:00.000Z')}}},
                        {$group: {_id: null, totalPledgedFive: {$sum: "$pledge"}, totalCountFive: {$sum: 1}}}])
                        .exec((err, weekFive) =>{
                          if (err) throw err
                          else {
                          let data = {};
                          data.weekOneInfo = weekOne
                          data.weekTwoInfo = weekTwo
                          data.weekThreeInfo = weekThree
                          data.weekFourInfo = weekFour
                          data.weekFiveInfo = weekFive
                          data.participantsCause= cause
                          res.send(data)
                          }
                        })
                      })
                  })
              })
        })
    })

//get time data
// returns number of participants during each week of november
router.get('/timedata', (req, res, next) => {
  Participant.aggregate([{$match:
      {'time': {$gte: new Date('2020-11-01T00:00:00.000Z'), $lt: new Date('2020-11-08T00:00:00.000Z')}}},
      {$group: {_id:null, weekOne: {$sum: 1}, totalPledgedOne: {$sum: '$pledge'}}}]).exec((err, weekOne) => {
        Participant.aggregate([{$match:
          {'time': {$gte: new Date('2020-11-08T00:00:00.000Z'), $lt: new Date('2020-11-15T00:00:00.000Z')}}},
          {$group: {_id:null, weekTwo: {$sum: 1}, totalPledgedTwo: {$sum: '$pledge'}}}]).exec((err, weekTwo) => {
            Participant.aggregate([{$match:
              {'time': {$gte: new Date('2020-11-15T00:00:00.000Z'), $lt: new Date('2020-11-22T00:00:00.000Z')}}},
              {$group: {_id:null, weekThree: {$sum: 1}, totalPledgedThree: {$sum: '$pledge'}}}]).exec((err, weekThree) => {
                Participant.aggregate([{$match:
                  {'time': {$gte: new Date('2020-11-22T00:00:00.000Z'), $lt: new Date('2020-11-29T00:00:00.000Z')}}},
                  {$group: {_id:null, weekFour: {$sum: 1}, totalPledgedFour: {$sum: '$pledge'}}}]).exec((err, weekFour)=> {
                    Participant.aggregate([{$match:
                      {'time': {$gte: new Date('2020-11-29T00:00:00.000Z'), $lt: new Date('2020-12-01T00:00:00.000Z')}}},
                      {$group: {_id:null, weekFive: {$sum: 1}, totalPledgedFive: {$sum: '$pledge'}}}]).exec((err, weekFive) => {
                        if (err) throw err
                        else {
                          let data = {};
                          data.weekOneCount = weekOne
                          data.weekTwoCount = weekTwo
                          data.weekThreeCount = weekThree
                          data.weekFourCount = weekFour
                          data.weekFiveCount = weekFive
                          res.send(data)
                        }
                      })
                  })
              })
          })
    })
})
  module.exports = router


