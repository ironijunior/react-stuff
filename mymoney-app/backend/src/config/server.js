const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const queryParser = require('express-query-int')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

//Middleware to convert the 'skip' and 'limit' URL parameters to Number
server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND is running at ${port}`)
})

module.exports = server