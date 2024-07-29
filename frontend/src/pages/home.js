import React from 'react';
import HomeBanner from '../components/HomeBanner';
import SingleHeading from '../components/SingleHeading';
import AboutUs from '../components/AboutUs';
import TopSkills from '../components/TopSkills';
import RecentProjects from '../components/RecentProjects';
import RecentBlogs from '../components/RecentBlogs';
import Carousel from '../components/slider'

export default function Home() {

    return (
        <>
            <HomeBanner
                title='We build things for the web'
                content='Experienced player in Market on Web Technologies, Good choice for small as well as large businessess.
                We have experise to build web solutions no multiple platform according to the need & demand. '/>

            <SingleHeading
                title="Web Development Services"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='EXPLORE' 
                padding='0px 20px' />

            {/* <OurServices /> */}
            <Carousel />

            <SingleHeading
                title=" About Us"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='KNOW' />

            <AboutUs name='Vishal Yadav' desination='Web Developer'/>

            <SingleHeading
                title=" Top Skills"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='EXPERTISE' />

            <TopSkills />         
            
            <RecentProjects bgColor='#f9f9f9'/>

            <SingleHeading
                title=" Our Blogs"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='recent' />

            <RecentBlogs />
        </>
    )
}
