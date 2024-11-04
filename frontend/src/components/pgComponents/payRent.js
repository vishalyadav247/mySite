import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useContext } from 'react';
import { RoomContext } from '../../useContext/roomContext';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function PayRent({ room }) {

    const { refreshAllRooms } = useContext(RoomContext);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>Pay Rent</Button>
            <Dialog

                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: async (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        try {
                            const response = await axios.put(`${serverUrl}/api/pay-rent`, formData, {
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                withCredentials: true
                            })
                            refreshAllRooms()
                            console.log(response)
                        } catch (error) {
                            console.log('error in paying rent', error)
                        }
                        handleClose();
                    },
                }}
            >
                <DialogTitle>{room.roomName}</DialogTitle>
                <DialogContent sx={{ width: '400px' }}>
                    <DialogContentText>
                        Pay your monthly rent bills here.
                    </DialogContentText>
                    <TextField
                        label="from"
                        required
                        margin="dense"
                        name="from"
                        type="date"
                        fullWidth
                        variant="standard"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label="To"
                        required
                        margin="dense"
                        name="to"
                        type="date"
                        fullWidth
                        variant="standard"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        required
                        margin="dense"
                        name="amount"
                        label="Rent Amount"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        name="currentGuest"
                        type="hidden"
                        value={room.currentGuest}
                    />
                    <TextField
                        name="roomId"
                        type="hidden"
                        value={room._id}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Pay Rent</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
