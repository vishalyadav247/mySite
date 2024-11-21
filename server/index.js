const express = require('express');
const connectDB = require('./utils/db');
require('dotenv').config();
const cors = require('cors');
const app = express();
const Router = require('./routes/auth-route')

const cookieParser = require('cookie-parser')
const port = process.env.PORT;
const corsOrigin = process.env.CORS_ORIGIN;
const path = require('path')
const _dirname = path.dirname("")
const buildPath = path.join(_dirname,"../frontend/build")

app.use(express.json());
const corsOptions = {
  origin: corsOrigin,
  credentials: true, 
};
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.static(buildPath))

app.use('/api',Router)

connectDB();
app.listen(port, () => {
  console.log(`App listening on ${port}`)
})
