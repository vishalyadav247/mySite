const { User, Room, Guest } = require('../models/auth-model.js');
const bcrypt = require("bcryptjs");
const timestamp = Math.floor(Date.now() / 1000);

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
                return res.status(401).send("Invalid credentials");
            } else {

                const token = await userValid.generateToken();
                res.cookie("userCookie", token, {
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                    httpOnly: true,
                    sameSite: "Lax",
                    secure: false
                });
                return res.status(200).send({ userValid })
            }

        } else {
            return res.status(404).send("User not found");
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

const logoutUser = async (req, res) => {
    try {
        res.clearCookie('userCookie');
        res.status(200).send({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(401).send({ message: 'error in Logged out' });
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
            guestContact: "",
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

        const newGuest = new Guest({
            guestName: req.body.name,
            phone: req.body.phone,
            jobProfile: req.body.jobProfile,
            adhaarId: req.body.adhaarId,
            workPlace: req.body.workPlace,
            roomAlloted: req.body.room,
            checkIn: timestamp,
            checkOut: ''
        })

        const updateRoom = await Room.findOneAndUpdate(
            { roomName: req.body.room },
            {
                $set: {
                    currentGuest: req.body.name,
                    guestContact: req.body.phone
                }
            },
            { new: true, useFindAndModify: false }
        );

        await newGuest.save();
        return res.status(201).send({ 'message': 'guest successfully created' })
    } catch (error) {

    }
}

const checkout = async (req, res) => {
    try {
        const guestExist = await Guest.findOne({ guestName: req.body.currentGuest });
        if (!guestExist) {
            return res.status(409).send({ "message": "Guest not exists" })
        }

        await Guest.findOneAndUpdate(
            { guestName: req.body.currentGuest },
            {
                $set: {
                    checkOut: timestamp
                }
            },
            { new: true, useFindAndModify: false }
        );

        await Room.findOneAndUpdate(
            { roomName: req.body.roomName },
            {
                $set: {
                    currentGuest: '',
                    guestContact: ''
                }
            },
            { new: true, useFindAndModify: false }
        );

        return res.status(201).send({ 'message': 'guest successfully checkout' })
    } catch (error) {
        console.log('error in checkout', error)
    }
}

const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).send({ message: "all room fetched", rooms: rooms })
    } catch (error) {
        res.status(500).send(error)
    }
}

const getGuestByRoom = async (req, res) => {
    try {
        let guestByRoom = await Guest.findOne({ guestName: req.body.currentGuest });
        res.status(200).send({ message: "guest fetch by room", guest: guestByRoom })
    } catch (error) {
        res.status(500).send("error in fetching guest", error)
    }
}

const getAllGuests = async (req, res) => {
    try {
        const guests = await Guest.find();
        res.status(200).send({ message: "all guest fetched", guests: guests })
    } catch (error) {
        res.status(500).send(error)
    }
}

const payRent = async (req, res) => {

    const { from, to, currentGuest, amount, roomId } = req.body;

    try {
        const newRentBill = {
            date: timestamp,
            from: Math.floor(new Date(from).getTime() / 1000),
            to: Math.floor(new Date(to).getTime() / 1000),
            guest: currentGuest,
            amount: amount
        };
        const updatedRoom = await Room.findByIdAndUpdate(
            roomId,
            { $push: { rentBills: newRentBill } },
            { new: true, runValidators: true }
        );

        if (!updatedRoom) {
            return res.status(404).send({ message: 'Room not found.' });
        }

        return res.status(200).send({ message: 'Rent bill successfully updated.', updatedRoom });

    } catch (error) {
        console.log('Updating rent:', error);
        return res.status(500).send('Server error while updating rent bills.');
    }
}

const payElectricity = async (req, res) => {

    const { from, to, startReading, endReading, currentGuest, amount, roomId } = req.body;

    try {
        const newElectricityBill = {
            date: timestamp,
            from: Math.floor(new Date(from).getTime() / 1000),
            to: Math.floor(new Date(to).getTime() / 1000),
            startReading: startReading,
            endReading: endReading,
            guest: currentGuest,
            amount: amount
        };
        const updatedRoom = await Room.findByIdAndUpdate(
            roomId,
            { $push: { electricityBills: newElectricityBill } },
            { new: true, runValidators: true }
        );
        if (!updatedRoom) {
            return res.status(404).send({ message: 'Room not found.' });
        }

        return res.status(200).send({ message: 'Electricity bill successfully updated.', updatedRoom });

    } catch (error) {
        console.log('Updating Electricity:', error);
        return res.status(500).send('Server error while updating electricity bills.');
    }
}

module.exports = {
    userRegister,
    userLogin,
    validateUser,
    logoutUser,
    addNewRoom,
    checkin,
    checkout,
    getAllRooms,
    getAllGuests,
    getGuestByRoom,
    payRent,
    payElectricity
};