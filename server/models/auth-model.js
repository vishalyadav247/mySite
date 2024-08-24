const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const tokenKey = 'vishalyadavisagoodboyheisacoderr';

const userSchema = new Schema({
    name: {
      type:String,
      required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[
      {
        token:{
          type:String,
          required:true
        }
      }
    ]
  });
  
  
  userSchema.pre("save",async function (next) {
    if(this.isModified("password")){
      this.password = await bcrypt.hash(this.password,12);
    }
    next()
  })

  userSchema.methods.generateToken = async function () {
    try {
      let userToken = jwt.sign({_id:this._id},tokenKey,{expiresIn:"1d"})
      this.tokens = this.tokens.concat({token:userToken})
      await this.save();
      return userToken;
    } catch (error) {
      return "error in token generation function"
    }
  }

  const User = mongoose.model('User',userSchema);

  module.exports = User;