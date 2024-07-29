import React from 'react';
import { Box, Typography, Button } from '@mui/material';


export default function ProjectCard(props) {
    const LinkCss = {
        textDecoration: 'none',
        color:'inherit',
        fontSize:'inherit'
    }
    const descCss = {
        fontSize: '18px',
        fontFamily: 'open sans',
        fontWeight: '300',
        color: '#7a7a7a',
        lineHeight: '1.8em',
        marginTop:'20px'
    }
    return (
        <Box className='work'>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gridColumnGap:{xs:'120px',lg: '200px'}, gridTemplateRows: 'auto auto 1fr',paddingTop:'80px',paddingBottom:'80px' }} className='siteWidth'>
                <Box sx={{ gridArea: '1/1/2/2', height: 'fit-content' }} className='logoWrapper'>
                    <img src={props.logo} alt='About Shopify' style={{ width: 'auto', height: 'auto' }} />
                </Box>
                <Box sx={{ gridArea: { xs: '3/1/4/2', md: '2/1/3/2' } }}>
                    <Typography sx={descCss}>{props.desc}</Typography>
                </Box>
                <Box sx={{ gridArea: { xs: '4/1/5/2', md: '3/1/4/2' } }}>
                    <Button variant='outlined' sx={{marginTop:'35px'}}>
                        <a href={props.siteLink} rel="noreferrer" target='_blank' style={LinkCss}>View Website</a>
                    </Button>
                </Box>
                <Box sx={{ gridArea: { xs: '2/1/3/2', md: '1/2/4/3' }, margin: { xs: '25px 0px', md: '0px' } }}>
                    <img src={props.siteImage} alt='About Shopify' />
                </Box>
            </Box>
        </Box>
    )
}
