const express = require('express')
var mongoose = require('mongoose')

var apiRouter = require('./api')
const Authentication = require('./authentication')

mongoose.connect('mongodb://localhost:27020/main')
mongoose.connection.on("err", function (err) {
	console.log("Error while connecting to database %s");
})
mongoose.connection.once("open", function () {
	console.log("Successfully connected")
})

var app = express()

app.use(express.json({type:"application/json"}))
app.use(express.urlencoded({extended:false}))

app.use('*', Authentication)

app.use('/api/v1', apiRouter)

app.use('*', function (req, res, next) {
	res.status(404).end()
})

app.listen(80, function (err, success) {
	console.log("Listening on port 80")
})