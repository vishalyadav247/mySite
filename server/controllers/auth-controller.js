const { User, Room, Guest } = require('../models/auth-model.js');

const bcrypt = require("bcryptjs");

const userRegister = async (req, res) => {
    try {
        const existingUser = await User.findOne({ name: req.body.name });
        if (existingUser) {
            return res.status(409).send("User already exists");
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

const userLogin = async (req, res) => {
    try {
        const userValid = await User.findOne({ email: req.body.email });
        if (userValid) {

            const detailsMatch = await bcrypt.compare(req.body.password, userValid.password)
            if (!detailsMatch) {
                return res.status(200).send("invalid credintials")
            } else {

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

        } else {
            return res.status(200).send("user not exist")
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}

const validateUser = async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.userId });
        res.status(200).send(user);
    } catch (error) {
        res.status(401).send("user not found");
    }
}

const addNewRoom = async (req, res) => {
    try {
        const roomExists = await Room.findOne({ name: req.body.roomName });
        if (roomExists) {
            return res.status(409).send({
                "message": "Room already exists"
            });
        }
        const newRoom = new Room({
            roomName: req.body.roomName,
            currentGuest: "",
            rentBills: [],
            electricityBills: []
        })
        await newRoom.save();
        return res.status(201).send('room successfully added')
    } catch (error) {
        console.log('Adding new room :', error)
    }
}

const checkin = async (req, res) => {
    try {
        const guestExist = await Guest.findOne({ name: req.body.name });
        if (guestExist) {
            return res.status(409).send({ "message": "Guest already exists" })
        }
        const date = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);

        const newGuest = new Guest({
            guestName: req.body.name,
            phone: req.body.phone,
            jobProfile: req.body.jobProfile,
            adhaarId: req.body.adhaarId,
            workPlace: req.body.workPlace,
            roomAlloted: req.body.room,
            checkIn: formattedDate,
            checkOut: ''
        })

        const updateRoom = await Room.findOneAndUpdate(
            { roomName: req.body.room },
            { $set: { currentGuest:req.body.name } },
            { new: true, useFindAndModify: false }
        );

        await newGuest.save();
        return res.status(201).send({ 'message': 'guest successfully created' })
    } catch (error) {

    }
}

const getAllRoomsWithGuest = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).send({ message: "all room fetched", rooms: rooms })
    } catch (error) {
        res.status(500).send(error)
    }
}

const getGuestByRoom = async(req,res)=>{
    try {
        let guestByRoom = await Guest.findOne({guestName:req.body.currentGuest});
        res.status(200).send({message:"guest fetch by room",guest:guestByRoom})
    } catch (error) {
        res.status(500).send("error in fetching guest", error)
    }
}

module.exports = { userRegister, userLogin, validateUser, addNewRoom, checkin, getAllRoomsWithGuest, getGuestByRoom };