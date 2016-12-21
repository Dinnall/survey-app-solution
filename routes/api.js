var router = require('express').Router()
var db = require('../models')
var debug = require('debug')('HALP')

router.route('/api/response')
  .get(function(req, res){
    db.Response.findAll({
      include: [ db.Question ]
    })
      .then(function(responses){
        debug("%O", responses)
        res.send(JSON.stringify(responses))
      })
      .catch(function(err){
        res.send(err)
      })
  })
  .post(function(req, res) {
    db.Response.create({
      QuestionId: req.body.id,
      choice: req.body.choice
    }).then(function() {
      res.send("recorded response")
    })
  })

router.route('/api/question')
  .get(function(req, res){
    db.Question.findAll()
      .then(function(questions) {
        debug("%O", questions[0].dataValues)
        res.send(JSON.stringify(questions))
      })
      .catch(function(err) {
        res.send(err)
      })
  })
  .post(function(req, res) {
    debugger
    db.Question.create({
      question: req.body.question,
      choiceOne: req.body.one,
      choiceTwo: req.body.two,
      choiceThree: req.body.three,
      choiceFour: req.body.four,
    }).then(function() {
      res.send("made question!")
    })
  })

module.exports = router
