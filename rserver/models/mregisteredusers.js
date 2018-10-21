const mongoose=require('mongoose')
const validator = require('validator');
const Mregisteredusers = mongoose.model('Registeredusers',
{
  email:{
    type:String,
    trim:true,
    minlength:1,
    required:true,
    unique:true,
    validate:{
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
    }
  },
  password:{
    type:String,
    trim:true,
    required:true,
    minlength:6
  },
  tokens:[{
    access:{
      type:String,
      required:true
    },
    tokens:{
      type:String,
      required:true
    }
  }]
  })
module.exports = Mregisteredusers
