const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
	name: String,
	pw: String,
	email: String
})

module.exports = mongoose.model('User', userSchema)