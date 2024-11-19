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
import { toast } from 'react-toastify';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function PayElectricity({ room }) {

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
            <Button variant="outlined" onClick={handleClickOpen}>Pay Electricity</Button>
            <Dialog

                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: async (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        console.log(formData)
                        try {
                            const response = await axios.put(`${serverUrl}/api/pay-electricity`, formData, {
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                withCredentials: true
                            })
                            refreshAllRooms()
                            console.log(response)
                            toast.success('Electricity Paid Successfully.')
                        } catch (error) {
                            console.log('error in paying electricity', error)
                            toast.error('Error in paying electricity.')
                        }
                        handleClose();
                    },
                }}
            >
                <DialogTitle>{room.roomName}</DialogTitle>
                <DialogContent sx={{ width: '400px' }}>
                    <DialogContentText>
                        Pay your monthly electricity bills here.
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
                        name="startReading"
                        label="Start Reading"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        name="endReading"
                        label='End Reading'
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        name="amount"
                        label="Electricity Amount"
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
                    <Button type="submit">Pay Electricity</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
