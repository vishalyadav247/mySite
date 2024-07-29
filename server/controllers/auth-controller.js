const User = require('../models/auth-model')

const userRegister = async (req, res) => {
    try {
        const existingUser = await User.findOne({ name: req.body.name });
        if (existingUser) {
            return res.status(200).send("User already exist.");
        }
        const newUser = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        });
        await newUser.save();
        return res.status(200).send("User registered")
    }
    catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal server error");
    }
}

module.exports = userRegister;