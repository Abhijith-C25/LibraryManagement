var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Student = new Schema({
    firstname: {
        type: String,
          required: true,      
      },
    lastname: {
        type: String,
         required: true,     
      },
      email:{
          type: String,
          required: true,
          unique: true
      },
      address:{
        type: String
    
        },
      roll:{
        type: String,
        required: true,
        unique: true
      }
});


module.exports = mongoose.model('Student', Student);