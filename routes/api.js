var router = require('express').Router()
var db = require('../models')

router.get('/api/response', function(req, res) {
  res.send('it works!')
})

router.route('/api/response')
  .get(function(req, res){
    db.Response.findAll({
      include: [ db.Question ]
    })
      .then(function(responses){
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
    console.log("hit it")
    db.Question.findAll()
      .then(function(questions) {
        res.send(JSON.stringify(questions))
      })
      .catch(function(err) {
        res.send(err)
      })
  })
  .post(function(req, res) {
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
