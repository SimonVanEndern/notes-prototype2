const mongoose = require('mongoose')

let noteSchema = new mongoose.Schema({
	text: String,
	created: Date,
	modified: Date,
	starred: Boolean
})

module.exports = mongoose.model('Note', noteSchema)