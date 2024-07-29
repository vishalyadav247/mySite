import React from 'react';

import SingleHeading from '../components/SingleHeading';
import HeaderDiv from '../components/HeaderDiv';
import bgImage from '../images/blogBg.jpg';
import ContactForm from '../components/ContactForm';

export default function Contact() {

  return (
    <>

      <HeaderDiv />

      <SingleHeading
        heightSm='200px'
        heightLg='200px'
        titleSizeSm='28px'
        titleSizeLg='35px'
        bgText='CONTACT'
        bgImage={bgImage} />

      <ContactForm linkAddress='/projects'/>

    </>
  )
}
