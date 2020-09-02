import React from 'react'
import './AboutRestaurantSection.css';
import { useInView } from 'react-intersection-observer';

const AboutRestaurantSection = (props, ref) => {
    const { header, text, highlightText, img, reverse, last } = props;

    const [sectionRef, sectionInView] = useInView({ threshold: .25, triggerOnce: true })
    const inViewClass = sectionInView ? 'inView' : null;

    const lastClass = last ? 'last' : null;
    const reverseClass = reverse ? 'reverse' : null;

    return (
        <div 
            ref={ sectionRef } 
            className={`AboutRestaurantSection ${ lastClass } ${ reverseClass } ${ inViewClass }`}>
            <div className={`AboutRestaurantSection-info ${ inViewClass }`}>
                <h3 className="AboutRestaurantSection-header">{ header }</h3>
                <p className="AboutRestaurantSection-text">{ text }</p>
                <p className="AboutRestaurantSection-highlightText">{ highlightText }</p>
            </div>
            <div className={`AboutRestaurantSection-imgContainer ${ reverse ? 'reverse' : null }`}>
                <img className={`${ img.orientation }`} src={ img.src } alt="Charred Food Restaurant"/>
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default AboutRestaurantSection;
