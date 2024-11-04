const express = require('express');
const connectDB = require('./utils/db');
const cors = require('cors');
const app = express();
const Router = require('./routes/auth-route')

const cookieParser = require('cookie-parser')
const path = require('path')
const _dirname = path.dirname("")
const buildPath = path.join(_dirname,"../frontend/build")

app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, 
};
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.static(buildPath))

app.use('/api',Router)

app.get("/", async (req,res)=>{
  res.status(200).json("home")
})

connectDB();
app.listen(4000, () => {
  console.log(`App listening on 4000`)
})
