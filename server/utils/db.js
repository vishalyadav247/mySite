const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/riser";
const connectDB = () => {
    mongoose.connect(URI);
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('DB connected');
    });
};

module.exports = connectDB;