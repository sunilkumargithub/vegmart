const express= require('express')
const router=express.Router()
// middleware that is specific to this router
const prod = require('.models/prod.js')
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/home', function (req, res) {
  res.send('Birds home page')
  var colprod= new prod();
  -----
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router
//Then, load the router module in the app:
