import React from 'react';

import HeaderDiv from '../components/HeaderDiv';
import SingleHeading from '../components/SingleHeading';
import RecentProjects from '../components/RecentProjects';
import ProjectCardWrapper from '../components/ProjectCardWrapper';
import bgImage from '../images/blogBg.jpg';


export default function Projects() {

  return (
    <>
      <HeaderDiv />

      <SingleHeading
        heightSm='200px'
        heightLg='200px'
        titleSizeSm='28px'
        titleSizeLg='35px'
        bgText='Projects'
        bgImage={bgImage}
      />

      <RecentProjects bgColor='#ffffff'/>

      <ProjectCardWrapper />
      
    </>
  )
}
