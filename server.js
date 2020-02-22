const express = require('express')  //imports
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()
app.use(express.json()) // to allow json in project
app.use(cors()) // allow access for all domains

app.listen(3000) //port connection

//init mongo database

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

requireDir("./src/models")  //search models

app.use('/api', require('./src/routes'))  //route default api

