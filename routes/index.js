var express = require('express');
var router = express.Router();
var User = require('../models').User
var Space = require('../models').Space
var Event = require('../models').Event

/* GET home page. */
router.get('/', function(req, res, next) {
	Event.find(function(err, eventos) {
		res.render('index', { data: eventos , title: 'Creatisidro'})
	})
})

router.get('/registro', function(req, res, next) {
	res.render('registro', { title: 'Registro' })
})

router.get('/creativos', function(req, res, next) {
	User.find({ type: 'creativo' }, function(err, users) {
		res.render('creativos', { data: users, title: 'Creativos'})
	})
})

router.get('/creativo/:username', function(req, res, next) {
	User.find({ username: req.params.username }, function(err, user) {
		res.render('creativo', { data: user, title: 'Creativo' })
	})
})

router.get('/vecinos', function(req, res, next) {
	User.find({ type: 'vecino'}, function(err, users) {
		res.render('vecinos', { data: users, title: 'Vecinos' })
	})
})

router.get('/vecino/:username', function(req, res, next) {
	User.find({ username: req.params.username }, function(err, user) {
		res.render('vecino', { data: user, title: 'Vecino' })
	})
})

router.get('/espacios', function(req, res, next) {
	Space.find(function(err, spaces) {
		res.render('espacios', { data: spaces, title: 'Espacios' })
	})
})

router.get('/espacio/:id', function(req, res, next) {
	Space.find( {_id: req.params.id }, function(err, space) {
		res.render('espacio', { data: space, title: 'Espacio'})
	})
})

router.get('/dashboard', function(req, res, next) {
	res.render('dashboard')
})

router.get('/crear/espacio', function(req, res, next) {
	res.render('espacio-crear')
})

router.get('/crear/evento', function(req, res, next) {
	res.render('evento-crear')
})

router.get('/eventos', function(req, res, next) {
	Event.find(function(err, events) {
		res.render('eventos', { data: events, title: 'Eventos'})
	})
})

router.get('/evento/:id', function(req, res, next) {
	Event.find({ _id: req.params.id }, function(err, evento) {
		res.render('evento', { data: evento, title: 'Evento' })
	})
})

module.exports = router