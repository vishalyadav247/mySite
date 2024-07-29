import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Map from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

export default function AppFooter() {

    const footerBoxCss = {
        display: "grid",
        gridTemplateColumns: { xs:'1fr', md: "1.1fr 2.4fr 1fr" },
        gridColumnGap: { xs:'40px' },
        gridRowGap: { xs:'9px' },
        color: "#000000"
    }
    const headingText = {
        fontFamily: "poppins",
        fontSize: "22px",
        fontWeight: "700",
        margin: "25px 0 10px 0",
        textAlign:{xs:'right',md:'left'},
        display:{xs:'none',sm:'block'}
    }
    const topScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <Box className="footerWraper" sx={{ backgroundColor: "#ffffff", borderTop: '1px solid #ebe9e9',padding:{xs:'30px 0px',sm:'50px 0px'}}}>
                <Box className="footerBox siteWidth" sx={footerBoxCss}>
                     {/* box one */}
                     <Box sx={{ alignItems: 'center', gap: '70px' }}>
                        <Typography sx={{fontFamily: "poppins", fontSize: "22px", fontWeight: "300" }}>
                            <Map fontSize='large' sx={{ border: "1px solid #000", borderRadius: "50%", padding: "5px", position: "relative", top: "8px", left: "-5px" }} />
                            Contact
                        </Typography>
                        <Box>
                            <Typography sx={{ fontSize: "16px", fontFamily: "open sans", fontWeight: "500", margin: "10px 0 0 0", lineHeight: '25px' }} >
                                +91 7669664266 <br />
                                vishalkvs@outlook.com 
                            </Typography>
                        </Box>

                    </Box>
                    {/* box two */}
                    <Box sx={{gridArea:{xs:'1/1/2/-1',md:'1/2/2/3'}}}>
                        <ul style={{ listStyle: 'none', display: 'grid',gridTemplateColumns:'1fr 1fr 1fr', padding: '0px', gap: '0px',marginTop:'7px'}} className='footerLinks'>
                            <li style={{ padding: '5px 10px 5px 0px' }}><Link to='/' onClick={topScroll}>Home</Link></li>
                            <li style={{ padding: '5px 10px 5px 0px' }}><Link to='/blogs' onClick={topScroll}>Blogs</Link></li>
                            <li style={{ padding: '5px 10px 5px 0px' }}>Services</li>

                            <li style={{ padding: '5px 10px 5px 0px' }}><Link to='/about' onClick={topScroll}>About Us</Link></li>
                            <li style={{ padding: '5px 10px 5px 0px' }}>Top Skills</li>
                            <li style={{ padding: '5px 10px 5px 0px' }}>Career</li>

                            <li style={{ padding: '5px 10px 5px 0px' }}>Dowload CV</li>
                            <li style={{ padding: '5px 10px 5px 0px' }}><Link to='projects' onClick={topScroll}>Projects</Link></li>
                            <li style={{ padding: '5px 10px 5px 0px' }}><Link to='contact' onClick={topScroll}>Contact Us</Link></li>
                        </ul>
                    </Box>
                   
                    {/* box three */}
                    <Box>
                        <Typography sx={headingText}>Follow Us</Typography>
                        <Typography sx={{ marginLeft: "-4px",marginTop:{xs:'15px',sm:'0'},textAlign:{md:'left'} }}><FacebookIcon fontSize='large' sx={{ marginRight: "15px" }} /><TwitterIcon fontSize='large' sx={{ marginRight: "15px" }} /><LinkedInIcon fontSize='large' sx={{ marginRight:{md: "15px"} }} /></Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
