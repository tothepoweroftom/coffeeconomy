const express = require('express')
const bodyParser = require('body-parser')
const balance = require('./coffee/balance.js')
const transferTo = require('./coffee/transferTo.js')
const signup = require('./users/signup.js')
const login = require('./users/login.js')
const give = require('./coffee/give.js')
const DataStore = require('nedb')
const CoffeeCoin = artifacts.require("./CoffeeCoin.sol")

function run (done) {
  CoffeeCoin.new().then(buildRest)
}

function buildRest (coin) {
  // lets set up really quickly a db
  var db = new DataStore({filename: 'users.db', autoload: true})

  // lets create a express app
  const app = express()

  // let's setup some middleware
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  // atach handlers
  app.get('/balance/:token', (req, res) => balance(coin, req, res))
  app.post('/send', (req, res) => transferTo(coin, req, res))
  app.post('/give', (req, res) => give(coin, req, res))
  app.post('/signup', (req, res) => signup(coin, db, req, res))
  app.post('/login', (req, res) => login(db, req, res))
  app.listen(3000, () => console.log('CoffeeRest up and running'))
}

module.exports = run
