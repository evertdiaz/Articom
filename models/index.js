var mongoose = require ('mongoose')

var Schema = mongoose.Schema

var userSchema = new Schema({
	username: String,
	password: String,
	name: String,
	mainCat: String,
	categories: Array,
	bio: String,
	web: String,
	type: String
})
mongoose.model('users', userSchema)
var User = mongoose.model('users')

var spaceSchema = new Schema({
	name: String,
	photos: Array,
	type: String,
	bio: String,
	height: Number,
	width: Number,
	owner: {
		type: Schema.ObjectId,
		ref: 'users'
	},
	lat: Number,
	lon: Number,
	zoom: Number
})
mongoose.model('spaces', spaceSchema)
var Space = mongoose.model('spaces')

var eventSchema = new Schema({
	name: String,
	bio: String,
	mainCat: String,
	categories: Array,
	host: {
		type: Schema.ObjectId,
		ref: 'users'
	},
	members: Array,
	link: String,
	space: {
		type: Schema.ObjectId,
		ref: 'spaces'
	}
})
mongoose.model('events', eventSchema)
var Event = mongoose.model('events')

module.exports.User = User
module.exports.Space = Space
module.exports.Event = Event