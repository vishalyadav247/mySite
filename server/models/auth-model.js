const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const tokenKey = 'vishalyadavisagoodboyheisacoderr';

const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
});

const roomSchema = new Schema({
    roomName: {
      type: String
    },
    currentGuest: {
      type: String
    },
    rentBills: [
      {
        month:{
          type:String
        },
        guest:{
          type:String
        },
        amount:{
          type:String
        }
      }
    ],
    electricityBills: [
      {
        from:{
          type:String
        },
        to:{
          type:String
        },
        startReading:{
          type:String
        },
        endReading:{
          type:String
        },
        amount:{
          type:String
        },
        guest:{
          type:String
        }
      }
    ]
});

const guestSchema = new Schema ({
  guestName:{
    type:String
  },
  phone:{
    type:String
  },
  jobProfile:{
    type:String
  },
  adhaarId:{
    type:String
  },
  workPlace:{
    type:String
  },
  roomAlloted:{
    type:String
  },
  checkIn:{
    type:String
  },
  checkOut:{
    type:String
  }
})

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

userSchema.methods.generateToken = async function () {
    try {
        let userToken = jwt.sign({ _id: this._id }, tokenKey, { expiresIn: "1d" });
        this.tokens = this.tokens.concat({ token: userToken });
        await this.save();
        return userToken;
    } catch (error) {
        return "error in token generation function";
    }
};

const User = mongoose.model('User', userSchema);
const Room = mongoose.model('Room', roomSchema);
const Guest = mongoose.model('Guest', guestSchema);


module.exports = { User , Room , Guest};
