import * as React from 'react';
import Card from '@mui/material/Card';
import { Box, Button, Typography } from '@mui/material';

export default function ServiceCard(props) {
    const serviceTitle = {
        fontSize: '30px !important',
        fontWeight: '600',
        lineHeight:{xs:'35px',lg:'30px'}
    }
    return (
        <Card sx={{ maxWidth: '100%',height:{sm:'450px'},display:'grid',gridTemplateColumns:{md:'1fr',lg:'1.2fr 1fr'},margin: 'auto', boxShadow: 'none', borderRadius: '10px',border:'1px solid silver'}} className='serviceBg'>
            <Box sx={{padding:{xs:'40px 30px',md:'70px'}}}>
                <Typography sx={serviceTitle}>{props.Title}</Typography>
                <Typography className='titleBorder' sx={{marginBottom:'25px'}}>
                    <span ></span><span></span><span></span>
                </Typography>
                <Typography >
                    {props.Description}
                </Typography>
                <ul className='servicesUl'>
                    <li>{props.point1}</li>
                    <li>{props.point2}</li>
                    <li>{props.point3}</li>
                </ul>
                <Button variant='contained'>{props.buttonText}</Button>
            </Box>
            <Box sx={{backgroundImage:`url('${props.Image}')`,height:'100%',display:{xs:'none',lg:'block'} }} className='serviceRight'>
            </Box>
        </Card>
    );
}
