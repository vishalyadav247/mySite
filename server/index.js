const express = require('express');
const connectDB = require('./utils/db');
const cors = require('cors');
const app = express();
const Router = require('./routes/auth-route')
const cookieParser = require('cookie-parser')

app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true,    
};
app.use(cors(corsOptions))
app.use(cookieParser())

app.use('/api',Router)
app.get("/",async (req,res)=>{
  res.status(200).json("home")
})

connectDB();
app.listen(4000, () => {
  console.log(`App listening on 4000`)
})