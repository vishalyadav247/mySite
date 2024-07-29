import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ServiceImage from '../images/services.png';


export default function OurServices() {
    const servicesWrapper={
        display:'grid',
        gridTemplateColumns:{xs:'1fr',md:'1fr 1fr'},
        backgroundColor:'#fafafa'
    }
    const servicesWrapperLeft={
        height:{xs:'auto',md:'650px',lg:'90vh'},
        position:{xs:'static',md:'sticky'},
        top:'65px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:{xs:'5%',md:'15%'}
    }
    const servicesWrapperRight = {
        padding:{xs:'60px 20px 0px 20px',md:'80px 40px 80px 0px',lg:'80px 70px'}
    }
    const servicesWrapperRightItem={
        height:{xs:'450px',md:'500px'}
    }
    const serviceTitle = {
        fontSize:'30px !important',
        marginBottom:'25px',
        fontWeight:'600'
    }
  return (
    <Box sx={servicesWrapper} className='siteWidth'>
        <Box sx={servicesWrapperLeft}>
            <img src={ServiceImage} alt="Website Design" loading='lazy' />
        </Box>
        <Box sx={servicesWrapperRight} className='servicesWrapperRight'>
            <Box sx={servicesWrapperRightItem} id='hiddenElement'>
                <Typography sx={serviceTitle}>React JS & Headless CMS</Typography>
                <Typography >
                    Bespoke web development services that respond to your business needs
                    development services that respond to your business needs
                    Bespoke web development  your business needs.
                </Typography>
                <ul className='servicesUl'>
                    <li>Point No 1</li>
                    <li>Point No 2</li>
                    <li>Point No 3</li>
                </ul>
                <Button variant='contained' sx={{borderRadius:'20px'}}>Explore More</Button>
            </Box>
            <Box sx={servicesWrapperRightItem}>
                <Typography sx={serviceTitle}>Ecommerce Development</Typography>
                <Typography>
                    Bespoke web development services that respond to your business needs
                    development services that respond to your business needs
                    Bespoke web development  your business needs.
                </Typography>
                <ul className='servicesUl'>
                    <li>Point No 1</li>
                    <li>Point No 2</li>
                    <li>Point No 3</li>
                </ul>
                <Button variant='contained' sx={{borderRadius:'20px'}}>EXPLORE MORE</Button>
            </Box>
            <Box sx={servicesWrapperRightItem}>
                <Typography sx={serviceTitle}>Wordpress CMS</Typography>
                <Typography>
                    Bespoke web development services that respond to your business needs
                    development services that respond to your business needs
                    Bespoke web development  your business needs.
                </Typography>
                <ul className='servicesUl'>
                    <li>Point No 1</li>
                    <li>Point No 2</li>
                    <li>Point No 3</li>
                </ul>
                <Button variant='contained' sx={{borderRadius:'20px'}}>Explore More</Button>
            </Box>
            <Box sx={servicesWrapperRightItem}>
                <Typography sx={serviceTitle}>Static Website Development</Typography>
                <Typography>
                    Bespoke web development services that respond to your business needs
                    development services that respond to your business needs
                    Bespoke web development  your business needs.
                </Typography>
                <ul className='servicesUl'>
                    <li>Point No 1</li>
                    <li>Point No 2</li>
                    <li>Point No 3</li>
                </ul>
                <Button variant='contained' sx={{borderRadius:'20px'}}>Explore More</Button>
            </Box>
        </Box>
    </Box>
  )
}
