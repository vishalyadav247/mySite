const jwt = require("jsonwebtoken");
const tokenKey = 'vishalyadavisagoodboyheisacoderr';
const { User } = require('../models/auth-model');

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        const varification = jwt.verify(token,tokenKey);
        const rootUser = await User.findOne({_id:varification._id});
        req.token = token;
        req.validUser = rootUser;
        req.userId = rootUser._id;
        next();
    } catch (error) {
        res.status(401).send("token not varifieed")
    }
}

module.exports = authenticate;