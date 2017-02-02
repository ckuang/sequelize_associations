var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var db = require('./models')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))


db.sequelize.sync({force: true}).then(function() {
  app.listen(3000)
})

module.exports = app
