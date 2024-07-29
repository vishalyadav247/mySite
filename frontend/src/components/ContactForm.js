import React, { useState } from 'react';
import { Typography, Button, Box, TextField } from '@mui/material';
import { Link } from "react-router-dom";

export default function ContactForm(props) {

    const obj = {
        maxWidth: "1920px",
        margin: 'auto',
        backgroundColor: '#f8f8f8',
        paddingTop:'70px',
        paddingBottom:'70px'
    }

    const titleCss = {
        fontSize: { xs: '32px', md: '37px' },
        fontFamily: 'open sans',
        fontWeight: '700',
        letterSpacing: '0.7px'
    }

    const descCss = {
        fontSize: '20px',
        fontFamily: 'open sans',
        margin:{xs:'15px 0px 30px 0px',sm:'15px 0px 63px 0px'}
    }

    const InputWrapperCss = {
        margin: '20px 0px 0px 0px',
        display: 'grid',
        gridGap: '15px'
    }

    const [formState, setFormState] = useState({});

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const config = {
            SecureToken: "b89b0af5-80f9-4388-9f9f-77c197474d2e",
            To: "vishal.kvs@outlook.com",
            From: "vishal.kvs@outlook.com",
            Subject: "JGW Contact form",
            Body: `From ${formState.name} <br>
                Email ID : ${formState.email} <br> 
                Phone    : ${formState.phone} <br><br><br>
                <div style='border:1px dotted black;padding:25px;'>
                  Message : ${formState.message}
                </div>`
        };
        if (window.Email) {
            window.Email.send(config).then((message) => alert(message)).then(() => {
                setFormState({})
            })
        }
    }
    const topScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <Box sx={obj}>
                <Box sx={{ height: "100%", display: 'flex', flexDirection: { xs: 'column', md: 'row' } }} className='siteWidth'>
                    <Box sx={{ width: { xs: '100%', md: '65%' }, paddingRight: { xs: '0px', md: '50px' } }}>
                        <Typography sx={titleCss}>Get In Touch</Typography>
                        <Typography sx={descCss}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Typography>
                        <Link to={props.linkAddress} onClick={topScroll}><Button variant='outlined'>Visit Portfolio</Button></Link>
                    </Box>
                    <Box sx={{ width: { xs: '100%', md: '35%' }, borderRadius: { xs: '5px', md: '1%' }, overflow: 'hidden', marginTop: { xs: '50px', md: '0px' } }}>
                        <Box >
                            <form onSubmit={submitHandler} >
                                <Box sx={InputWrapperCss} className='contactUpperInputWrapper'>
                                    <TextField className='letsTalkFields' label="Full Name" variant="filled" name='name' onChange={changeHandler} value={formState.name || ''} />
                                    <TextField className='letsTalkFields' label="Email Address" variant="filled" name='email' onChange={changeHandler} value={formState.email || ''} />
                                    <TextField className='letsTalkFields' label="Phone Number" variant="filled" name='phone' onChange={changeHandler} value={formState.phone || ''} />
                                    <TextField className='letsTalkFields' label="I am enquiring about.." variant="filled" name='message' onChange={changeHandler} value={formState.message || ''} />
                                    <Button type='submit' id='contactSubmitBtn' variant="contained" sx={{ marginTop: '10px', height: '40px', fontSize: '16px' }}>Submit</Button>
                                </Box>
                            </form>
                            <Typography sx={{ textAlign: 'center', paddingBottom: '20px' }}></Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
