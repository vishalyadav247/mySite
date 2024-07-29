import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles
import ServiceCard from './servicesCard';
import { Box} from '@mui/material';
import service1 from '../images/service1.jpg'
import service2 from '../images/service2.png';
import service3 from '../images/service3.jpeg'
import service4 from '../images/service4.jpg'


const Carousel = () => {

    const data = [
        {
            id:'1',
            imagE:service1,
            title: 'React JS & Headless CMS',
            description: 'Bespoke web development services that respond to your business needs development services that respond to your business needs Bespoke web development  your business needs.',
            point1: 'Point No 1',
            point2: 'Point No 2',
            point3: 'Point No 3',
            buttonText: 'Explore More'
        },
        {
            id:'2',
            imagE:service2,
            title: 'Ecommerce Development',
            description: 'Bespoke web development services that respond to your business needs development services that respond to your business needs Bespoke web development  your business needs.',
            point1: 'Point No 1',
            point2: 'Point No 2',
            point3: 'Point No 3',
            buttonText: 'Explore More'
        },
        {
            id:'3',
            imagE:service3,
            title: 'Wordpress CMS',
            description: 'Bespoke web development services that respond to your business needs development services that respond to your business needs Bespoke web development  your business needs.',
            point1: 'Point No 1',
            point2: 'Point No 2',
            point3: 'Point No 3',
            buttonText: 'Explore More'
        },
        {
            id:'4',
            imagE:service4,
            title: 'Business Website Development',
            description: 'Bespoke web development services that respond to your business needs development services that respond to your business needs Bespoke web development  your business needs.',
            point1: 'Point No 1',
            point2: 'Point No 2',
            point3: 'Point No 3',
            buttonText: 'Explore More'
        }
    ]

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        arrows:true,
        responsive: [
            {
                breakpoint: 1024, // medium screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <Box className='siteWidth'>
            <Slider {...settings}>
                {
                    data.map(obj => (

                        <Box key={obj.id}>
                            <ServiceCard Image={obj.imagE} Title={obj.title} Description={obj.description} point1={obj.point1} point2={obj.point2} point3={obj.point3} buttonText={obj.buttonText} />
                        </Box>

                    ))
                }

            </Slider>
        </Box>
    );
};

export default Carousel;
