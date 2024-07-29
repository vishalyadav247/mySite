import React from 'react'
import Divider from '@mui/material/Divider';
import { Box, Typography } from '@mui/material';

export default function OverText(props) {
    const styleObj = {
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection:"column",
        color:"white",
        paddingTop:"20px",
        justifyContent:'center'
    }
    const titleCss={
        fontSize:{xs:"25px",md:"37px"},
        marginBottom:"20px",
        fontFamily:"open sans",
        fontWeight:"700"
    }
    const contentCss={
        width: { xs: '90%', md: '70%' ,lg:"42%"},
        fontSize:{xs:'17px',md:'20px'},
        letterSpacing:" 0.5px" ,
        fontFamily:"open sans"
    }
    return (
            <Box sx={styleObj}>
            <Typography sx={titleCss}>{props.title}</Typography>
            <Divider style={{width:"180px",height:"5px",backgroundColor:"white",marginBottom:"25px"}}/>
            <Typography sx={contentCss}>
                {props.content}
            </Typography>
        </Box>
    )
}
