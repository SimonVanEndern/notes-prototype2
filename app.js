const express = require('express')
var apiRouter = require('./api')

var app = express()

app.use(express.json())

app.use('/api/v1', apiRouter)

app.listen(80)