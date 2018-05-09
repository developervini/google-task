const cors = require('cors')
const db = require('./db')
const express = require('express')
const app = module.exports = express()
const bodyParser = require('body-parser')

const Task = require('./controllers/task')

app.use(cors({ origin: '*' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/task', (req, res) => {
    Task.list(req, res)
})

app.post('/task', (req, res) => {
    Task.create(req, res)
})

app.get('/task/:id', (req, res) => {
    Task.find(req, res)
})

app.put('/task/:id', (req, res) => {
    Task.edit(req, res)
})

app.delete('/task/:id', (req, res) => {
    Task.delete(req, res)
})

module.exports = app