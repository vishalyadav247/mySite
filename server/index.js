const express = require('express');
const connectDB = require('./utils/db');
const cors = require('cors');
const app = express();
const Router = require('./routes/auth-route')
app.use(express.json());
app.use(cors())

app.use('/api',Router)
app.get("/",async (req,res)=>{
  res.status(200).json("home")
})

connectDB();
app.listen(4000, () => {
  console.log(`App listening on 4000`)
})