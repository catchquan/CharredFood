import React from 'react';
import './AboutRestaurant.css';
import AboutRestaurantSection from './AboutRestaurantSection';
import AboutImgGallery from './AboutImgGallery';
import restaurantStockImg from '../../imgs/restaurant-stock3.jpg';
import burgerStock from '../../imgs/burger-stock.jpg';
import worldgateImg from '../../imgs/worldgatecentre.png';

const section_data = [
    {
        header: 'The Restaurant',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, necessitatibus dolores quaerat qui esse, excepturi enim commodi aperiam magnam, assumenda earum voluptates officia hic quia quam dolor vel provident. Delectus, natus fugiat! Totam explicabo delectus consequuntur perspiciatis quidem recusandae repellendus excepturi dicta in? Cupiditate at in velit minima, voluptas odio?',
        highlightText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, pariatur magni alias quasi quae perferendis fugiat quidem quam labore ex nam quis non delectus nemo.',
        img: {
            src: restaurantStockImg,
            orientation: 'portrait'
        }
    },
    {
        header: 'Our Food',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, necessitatibus dolores quaerat qui esse, excepturi enim commodi aperiam magnam, assumenda earum voluptates officia hic quia quam dolor vel provident. Delectus, natus fugiat! Totam explicabo delectus consequuntur perspiciatis quidem recusandae repellendus excepturi dicta in? Cupiditate at in velit minima, voluptas odio?',
        highlightText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, pariatur magni alias quasi quae perferendis fugiat quidem quam labore ex nam quis non delectus nemo.',
        img: {
            src: burgerStock,
            orientation: 'portrait'
        }
    },
    {
        header: 'Location',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, necessitatibus dolores quaerat qui esse, excepturi enim commodi aperiam magnam, assumenda earum voluptates officia hic quia quam dolor vel provident. Delectus, natus fugiat! Totam explicabo delectus consequuntur perspiciatis quidem recusandae repellendus excepturi dicta in? Cupiditate at in velit minima, voluptas odio?',
        highlightText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, pariatur magni alias quasi quae perferendis fugiat quidem quam labore ex nam quis non delectus nemo.',
        img: {
            src: worldgateImg,
            orientation: 'landscape'
        }
    }
]

function AboutRestaurant(){
    const sectionMap = section_data.map((section, idx) => {
        let props = section;

        if(idx === section_data.length - 1){
            props = { ...section, last: true }
        }

        if(idx % 2 !== 0){
            props = { ...props, reverse: true }
        }

        return <AboutRestaurantSection { ...props } key={ idx } />;
    })

    return (
        <section className="AboutRestaurant">
            { sectionMap }
            <AboutImgGallery />
        </section>
    )
}

export default AboutRestaurant;