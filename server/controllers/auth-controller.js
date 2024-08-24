const User = require('../models/auth-model');
const bcrypt = require("bcryptjs");

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

const userLogin = async (req,res)=>{
    try {
        const userValid = await User.findOne({email:req.body.email});
        if(userValid){

            const detailsMatch = await bcrypt.compare(req.body.password,userValid.password)
            if(!detailsMatch){
                return res.status(200).send("invalid credintials")
            }else{

                const token = await userValid.generateToken();
                res.cookie("userCookie", token, {
                    expires: new Date(Date.now() + 30000),
                    httpOnly: true,
                    sameSite: "Lax",  // "Lax" is safer and should work in most cases
                    secure: false      // Set to false for development if not using HTTPS
                });                                
                const result = {
                    userValid,
                    token
                }
                return res.status(200).send(result)
            }

        }else{
            return res.status(200).send("user not exist")
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}

const validateUser = async(req,res)=>{
    try {
        let user = await User.findOne({_id:req.userId});
        res.status(200).send(user);
    } catch (error) {
        res.status(401).send("user not found");
    }
}

module.exports = {userRegister,userLogin,validateUser};