import React from 'react';
import Box from '@mui/material/Box';

import HeaderDiv from '../components/HeaderDiv';
import SingleHeading from '../components/SingleHeading';
import SkillsWrapper from '../components/SkillsWrapper';
import bgImage from '../images/blogBg.jpg';
import AboutUs from '../components/AboutUs';

export default function About() {
  return (
    <>
      <HeaderDiv />

      <SingleHeading
        heightSm='200px'
        heightLg='200px'
        titleSizeSm='28px'
        titleSizeLg='35px'
        bgText='About'
        bgImage={bgImage} />

      <AboutUs name='Vishal Yadav' desination='Web Developer'/>

      <Box >
        
        <SingleHeading
          title="Top Skills"
          heightSm='160px'
          heightLg='150px'
          titleSizeSm='28px'
          titleSizeLg='35px'
          bgText='Technologies'
          style={{ padding: '0px 20px' }} />

        <SkillsWrapper />

      </Box>
    </>
  )
}
