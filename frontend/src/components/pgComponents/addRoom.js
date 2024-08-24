import React from 'react'
import HeaderDiv from '../HeaderDiv'
import { TextField, Box , Button} from '@mui/material'

function AddRoom() {
    return (
        <>
            <HeaderDiv />
            <div className='siteWidth'>
                <h3>Add Room</h3>
                <Box component="form"  noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
            
                </Box>

            </div>
        </>
    )
}

export default AddRoom
