import React from 'react';
import Box from '@mui/material/Box';
import SkillCard from './SkillCard';
import Skill1 from '../images/html.png';
import Skill2 from '../images/css.png';
import Skill3 from '../images/javascript.png';
import Skill4 from '../images/react.png';
import Skill5 from '../images/wordpress.png';
import Skill6 from '../images/shopify.png';
import Skill8 from '../images/aws.png';
import Skill9 from '../images/git.png';

export default function SkillsWrapper() {
  const skillsWrapperCss={
    display:'grid',
    gridTemplateColumns:{xs:'1fr 1fr',sm:'1fr 1fr 1fr 1fr'},
    gap:{xs:'20px',md:'50px'},
    paddingBottom:'80px'
  }
  return (
    <Box sx={skillsWrapperCss} className='siteWidth'>
      <SkillCard image={Skill1} />
      <SkillCard image={Skill2} />
      <SkillCard image={Skill3} />
      <SkillCard image={Skill4} />
      <SkillCard image={Skill5} />
      <SkillCard image={Skill6} />
      <SkillCard image={Skill8} />
      <SkillCard image={Skill9} />
    </Box>
  )
}
