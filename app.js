const express = require('express')
var apiRouter = require('./api')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27020/main')
mongoose.connection.on("err", function (err) {
	console.log("Error while connecting to database %s");
})
mongoose.connection.on("open", function () {
	console.log("Successfully connected")
})

var app = express()

app.use(express.json({type:"application/json"}))

app.use('/api/v1', apiRouter)

app.listen(80, function (err, success) {
	console.log("Listening on port 80")
})