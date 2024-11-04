const jwt = require("jsonwebtoken");
const { User } = require('../models/auth-model');
require('dotenv').config();

const tokenKey = process.env.TOKEN_KEY;

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.userCookie;
        if (!token) {
            return res.status(401).send("Token is missing. Please log in.");
        }
        const varification = jwt.verify(token,tokenKey);
        const rootUser = await User.findOne({_id:varification._id});
        if (!rootUser) {
            return res.status(401).send("User not found. Please log in again.");
        }
        req.token = token;
        req.validUser = rootUser;
        req.userId = rootUser._id;
        next();
    } catch (error) {
        return res.status(401).send("Token is not verified or has expired.");
    }
}

module.exports = authenticate;