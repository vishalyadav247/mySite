import { Box } from '@mui/material';
import React from 'react';
import OverText from './OverText';

export default function HomeBanner(props) {
  const obj = {

    height: " 505px",
    
  }
  const objWrapper={
    backgroundSize: "cover !important",
    backgroundColor: '#1a66fbd4!important',
    background: `url(${props.banner})`,
    backgroundPosition: "center !important",
  }
  return (
    <Box sx={objWrapper}>
      <Box className="homeBanner siteWidth" sx={obj}>
        <OverText title={props.title} content={props.content} />
      </Box>
    </Box>
  )
}
