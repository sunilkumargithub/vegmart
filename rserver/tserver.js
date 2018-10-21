var express = require('express')
var app=express()
var birds = require('./birds')

app.use(function (req, res, next) {
     next();
 });

app.use('/birds', birds)

const port = "6000"
app.set('port',port)
app.listen(port,()=>{
  console.log(`NodeJS Server Started on port ${port}....`)
})
