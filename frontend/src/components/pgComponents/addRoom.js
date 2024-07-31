import React from 'react'
import HeaderDiv from '../HeaderDiv'
import { TextField } from '@mui/material'

function AddRoom() {
    return (
        <>
            <HeaderDiv />
            <div className='siteWidth'>
                <h3>Add Room</h3>
                <div>
                    <TextField id="outlined-basic" label="Room Name" variant="outlined" />
                    <TextField id="outlined-basic" label="User Name" variant="outlined" />
                    <TextField id="outlined-basic" label="User Phone" variant="outlined" />
                </div>

            </div>
        </>
    )
}

export default AddRoom
