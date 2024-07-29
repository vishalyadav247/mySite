import React from 'react';
import { Box } from '@mui/material';
import ProjectCard from './ProjectCard';
import logo1 from '../images/sociallydistantcakes_logo.png';
import image1 from '../images/sociallydistantcakes_image.png';
import logo2 from '../images/ryllzessentials_logo.png';
import image2 from '../images/ryllzessentials_image.png';
import logo3 from '../images/qubogo_logo.png';
import image3 from '../images/qubogo_image.png';
import logo4 from '../images/miamagell_logo.png';
import image4 from '../images/miamagell_image.png';
import logo5 from '../images/orvi_logo.png';
import image5 from '../images/orvi_image.png';


export default function ProjectCardWrapper() {
    return (
        <Box>
            <Box >
                <ProjectCard
                    logo={logo1}
                    siteImage={image1}
                    desc='Socially Distant Cakes is India’s first
                    e-cupcakery that allows you to send freshly baked,
                    delicious, personalized cupcakes to your loved ones
                    from the comfort of your own home.'
                    siteLink='https://sociallydistantcakes.com/'
                />
                <ProjectCard
                    logo={logo2}
                    siteImage={image2}
                    desc='The Ryllz Essentials’ Golden Garden logo represents 
                    Nature’s bounty. Full of all things natural, from flowers 
                    to fruits, from leaves to stalks, everything comes together 
                    in a circular logo showing a Universe that is abundant, pure, 
                    and luxurious.'
                    siteLink='https://ryllzessentials.com/'
                />
                <ProjectCard
                    logo={logo3}
                    siteImage={image3}
                    desc='Qubo Go Audio Sunglasses provide hands-free immersive audio experience on the go.'
                    siteLink='https://qubogo.com/'
                />
                <ProjectCard
                    logo={logo4}
                    siteImage={image4}
                    desc='Mia Magell is a fashion brand making clothes for women that focus on the 
                    ethos of inclusivity,effortlessness and exuberance. We draw inspiration from 
                    different aspects of life'
                    siteLink='https://miamagell.com/'
                />
                <ProjectCard
                    logo={logo5}
                    siteImage={image5}
                    desc='ORVI combines craftsmanship with innovation, technology with heritage, 
                    and Western aesthetics with artisanal skills. Surfaces & Home Accents with a Twist.'
                    siteLink='https://orvi.com/'
                />
            </Box>
        </Box>
    )
}
