const express = require('express')
const Note = require('./model/note')

var router = express.Router()

router.route('/note')
	.get(function (req, res, next) {
		Note.find(function (err, notes) {
			if (err) {
				res.status(500).end()
			} else {
				res.status(200).json(notes)
			}
		})
	})
	.put(function (req, res, next) {
		let newNote = new Note(req.body)
		newNote.save(function (err, note) {
			if (err) {
				res.status(500).end()
			} else {
				res.status(201).json(note)
			}
		})
	})
	.post(function (req, res, next) {
		Note.findByIdAndUpdate(req.body.id, req.body, function (err, note) {
			if (err) {
				res.status(500).end()
			} else {
				res.status(200).json(note)
			}
	})