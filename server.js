'use strict'

var express = require('express')
var bodyParser = require('body-parser')

const client = require("./client")

var app = express()

var config = require('./config')
const PORT = process.env.PORT || config.port

app.use(bodyParser.json())
app.use(express.static(__dirname))
app.listen(PORT)

console.log('App listening on http://localhost:' + PORT)

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname })
})

app.post('/api/:workflow_name/dispatch', function (req, res) {
  console.log(`Dispatch a new instance of ${req.params.workflow_name} with inputs params: ${JSON.stringify(req.body, null, 2)}`)

  const {id} = client.run
  .workflow(req.params.workflow_name, ...req.body)

  res.json({id})
})

app.post('/api/:workflow_name/event', function (req, res) {
  console.log(`Send an event for the ${req.params.workflow_name} with data: ${JSON.stringify(req.body, null, 2)}`)

  // Send an event to a Zenaton Workflow instance
  client.select
    .workflow(req.params.workflow_name)
    .send(req.body.name, ...req.body.data)

  res.json({})
})