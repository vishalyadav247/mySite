import React from 'react';
import recentProjectImage from '../images/recentProjects.jpg';
import { Typography, Box, Button } from '@mui/material';
import { Link } from "react-router-dom";

export default function RecentProjects(props) {

    const recentProjectCss = {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1.39fr 1fr' }
    }
    const TitleCss = {
        fontSize: { xs: '28px', md: '35px' },
        fontFamily: 'poppins',
        fontWeight: '700',
        color: '#000000',
        lineHeight: '0.9',
        margin: { xs: '30px 0px', md: '0px 0px 30px 0px' }
    }
    const ContentCss = {
        textAlign: 'justify',
        fontSize: '17px',
        fontFamily: 'open sans',
        color: '#7a7a7a',
        marginBottom: '30px',
        fontWeight: '300',
        lineHeight: '1.8'
    }
    const topScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <Box sx={{ backgroundColor:props.bgColor,padding:'80px 0'}}>
                <Box sx={recentProjectCss} className='siteWidth'>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column',paddingRight:'100px' }}>
                        <Typography sx={TitleCss}>Our Recent Project</Typography>
                        <Typography sx={ContentCss}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Typography>
                        <Link to='projects' onClick={topScroll}><Button variant="outlined" sx={{ maxWidth: '200px', marginTop: '10px', height: '40px', fontSize: '14px' }}>Recent Project</Button></Link>
                    </Box>
                    <Box sx={{}} className="recentProject">
                        <img src={recentProjectImage} alt='react projects' style={{  }} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
