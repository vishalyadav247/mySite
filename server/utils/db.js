const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.DB_URI;
const connectDB = () => {
    mongoose.connect(URI);
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('DB connected');
    });
};

module.exports = connectDB;