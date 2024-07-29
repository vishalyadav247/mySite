import React from 'react';
import { Box } from '@mui/material';

export default function SkillCard(props) {
  const imageCss={
    width: "100%", 
    height: "100%",
    transition:'all 0.3s linear',
    display: 'table-header-group',
    padding:'50px'
  }
  const ImageWrapper={
    overflow:'hidden',
    border:'1px solid #dde3ee',
  }
  
  return (
    <Box>
      <Box className='teamCardImage' sx={ImageWrapper}>
        <img src={props.image} style={imageCss} alt="Team Member" className='teamImage'></img>
      </Box>
    </Box>
  )
}
