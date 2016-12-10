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

router.post('/user', function(req, res, next) {
	var username = req.body.username
	var password = req.body.password
	var name = req.body.name
	var mainCat = req.body.mainCat
	var categories = req.body.categories
	var bio = req.body.bio
	var web = req.body.web
	var type = req.body.type
	var newuser = new User()
	newuser.username = username
	newuser.password = password
	newuser.name = name
	newuser.mainCat = mainCat
	newuser.categories = categories
	newuser.bio = bio
	newuser.web = web
	newuser.type = type
	newuser.save(function(err, savedUser) {
		if(err) {
			console.log(err)
			return res.status(500).send()
		}
		return res.status(200).send()
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

router.post('/space', function(req, res, next) {
	var name = req.body.name
	var photos = req.body.photos
	var type = req.body.type
	var bio = req.body.bio
	var height = req.body.height
	var width = req.body.width
	var owner = req.body.owner
	var ubicacion = req.body.ubicacion
	var newspace = new Space()
	newspace.name = name
	newspace.photos = photos
	newspace.type = type
	newspace.bio = bio
	newspace.height = height
	newspace.width = width
	newspace.owner = owner
	newspace.save(function(err, savedSpace) {
		if(err) {
			console.log(err)
			return res.status(500).send()
		}
		return res.status(200).send()
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

router.post('/event', function(req, res, next) {
	var name = req.body.name
	var bio = req.body.bio
	var mainCat = req.body.mainCat
	var categories = req.body.categories
	var host = req.body.host
	var members = req.body.members
	var link = req.body.link
	var space = req.body.space
	var newevent = new Event()
	newevent.name = name
	newevent.bio = bio
	newevent.mainCat = mainCat
	newevent.categories = categories
	newevent.host = host
	newevent.members = members
	newevent.link = link
	newevent.space = space
	newevent.save(function(err, savedEvent) {
		if(err) {
			console.log(err)
			return res.status(500).send()
		}
		return res.status(200).send()
	})
})

module.exports = router;