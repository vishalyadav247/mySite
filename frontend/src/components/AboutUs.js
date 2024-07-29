import Box from '@mui/material/Box';
import Image11 from '../images/weare.jpg'
import { Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";


export default function AboutUs() {

    const weAreWrapper = {
        display: 'grid',
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        paddingTop: {xs:'130px',sm:'80px'},
        gridGap:{xs:'100px',sm:'0px'},
        paddingBottom: '80px'
    }
    const weAreContent = {
        lineHeight: "1.8em",
        fontFamily: "open sans",
        fontSize: "17px",
        color: "#7a7a7a",
        fontWeight: "300",
        marginBottom: '30px',
        marginTop: '20px'
    }
    const imageCss = {
        width: "100%",
        height: "100%",
        transition: 'all 0.3s linear',
        display: 'table-header-group',
    }

    const ImageWrapper = {
        overflow: 'hidden',
        border: '3px solid #f6f6f6',
        boxShadow: '0px 0px 3px rgba(0,0,0,0.6)',
        margin: {xs:'0 0 0 35px',sm:'50px',lg:'50px 100px 30px 100px',xl:'50px 100px 30px 160px'}
    }
    const topScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <Box sx={{ backgroundColor: "#f8f8f8" }}>
            <Box className="weAreWrapper siteWidth" sx={weAreWrapper}>
                <Box className="weAreLeft" >
                    <Box sx={{}} className='imageLine'>
                        <Box sx={ImageWrapper}>
                            <img src={Image11} style={imageCss} alt="Team Member" className='teamImage'></img>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>Web Developer</Typography>
                    <Typography sx={weAreContent}>
                        I'm <strong> VISHAL YADAV </strong> Self-motivated & results oriented professional MBA (IT) graduate
                        and a passionate Web Developer intern with hands-on experience & practice
                        in Dynamic & Single Page Application (SPA) Designs and Development. I have
                        developed Fully Responsive Web Applications compatible with multiple screens.
                    </Typography>
                    <Button variant='outlined'>Download CV</Button>
                    <Link to='/projects' onClick={topScroll}><Button variant='outlined' sx={{ marginLeft: '20px' }}>Recent Work</Button></Link>
                </Box>
            </Box>

        </Box>
    )
}


