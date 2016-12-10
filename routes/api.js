var express = require('express')
var router = express.Router()
var User = require('../models').User
var Event = require('../models').Event
var Space = require('../models').Space


// USUARIOS
router.get('/users', function(req, res, next) {
	User.find(function(err, users) {
		res.send(users)
	})
})

router.get('/user/:id', function(req, res, next) {
	User.find({ _id: req.params.id }, function(err, user) {
		res.send(user)
	})
})

router.get('/user/cat/:cat', function(req, res, next) {
	User.find({ mainCat: req.params.cat}, function(err, user) {
		res.send(user)
	})
})

//ESPACIOS
router.get('/spaces', function(req, res, next) {
	Space.find(function(err, spaces) {
		res.send(spaces)
	})
})

router.get('/space/:id', function(req, res, next) {
	Space.find({ _id: req.params.id }, function(err, space) {
		res.send(space)
	})
})

//EVENTOS
router.get('/events', function(req, res, next) {
	Event.find(function(err, events) {
		res.send(events)
	})
})

router.get('/event/:id', function(req, res, next) {
	Event.find({ _id: req.params.id }, function(err, events) {
		res.send(events)
	})
})

router.get('/event/cat/:cat', function(req, res, next) {
	Event.find({ mainCat: req.params.cat}, function(err, events) {
		res.send(events)
	})
})

module.exports = router;