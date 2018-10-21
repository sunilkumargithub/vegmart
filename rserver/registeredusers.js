//----Registered user APis
//------------------

var express = require('express')
var routerRegisteredusers = express.Router()
require('./db/config.js')
var app=express()
const bodyParser=require('body-parser')
const {mongoose}=require('./db/mongoose.js')
const {ObjectID}=require('mongoose')
var {Mregisteredusers} =require('./models/mregisteredusers.js')
var _=require('lodash')

app.use(function usercall(req,res,next){
  console.log('usercall')
  next()
})
   routerRegisteredusers.post('/registeredusers',(req,res)=>{
    var body = _.pick(req.body,['email','password'])
    var user = new Mregisteredusers(body)
    user.save().then((docs)=>{
      res.send(docs)
    }).catch((err)=>{
      res.status(400).send(err)
    })
  })

  routerRegisteredusers.get('/registeredusers',(req,res)=>{
  //Mregisteredusers.find().then((docs)=>{
  mongoose.db.registeredusers.find().then((docs)=>{
    res.send({docs})
  }).catch((err)=>{
    res.status(400).send(err)
  })
  })

  routerRegisteredusers.delete('/registeredusers',(req,res)=>{
  mongoose.db.registeredusers.remove({email:req.body.email}).then((docs)=>{
    res.send({docs})
  }).catch((err)=>{
    res.status(400).send(err)
  })
  })

  routerRegisteredusers.patch('/registeredusers/:id',(req,res)=>{
    var body = _.pick(req.body,['email','password'])
  mongoose.db.registeredusers.findByIdAndUpdate(req.params.id,{$set:body},{new:true}).then((docs)=>{
      if(!docs){
        return res.status(400).send('Unable to find record')
      }
      res.send({docs})
    }).catch((err)=>{
      res.status(400).send(err)
    })
  })
app.use('/routerRegisteredusers',routerRegisteredusers)
module.exports = routerRegisteredusers

//---End Registered user APis
