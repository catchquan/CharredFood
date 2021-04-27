import React, { useState, useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import './AboutImgGalleryImg.css';
import PropTypes from 'prop-types';
import { MainStateContext } from '../../Charred';

AboutImgGalleryImg.propTypes = {
    img: PropTypes.string.isRequired,
    idx: PropTypes.number.isRequired
}

export default function AboutImgGalleryImg(props){
    let { isMobile } = useContext(MainStateContext);

    const { img, idx } = props;
    let [imgRef, imgInView] = useInView({ threshold: .05 })

    let inView = imgInView ? 'inView' : null;
    const [transitionDelayTime, setTransitionDelayTime] = useState({})
    useEffect(() => {
        if(isMobile){
            setTransitionDelayTime({})
        } else if(idx <= 3){
            setTransitionDelayTime({transitionDelay: `${(100 * idx)}ms`})
        }
    }, [isMobile, idx])

    //Remove transition delay after first inview
    useEffect(() => {
        function removeDelayTime(){
            setTransitionDelayTime({})
        }
        if(imgInView){
            setTimeout(removeDelayTime, 1000);
        }
        return () => {
            clearTimeout(removeDelayTime)
        }
    }, [imgInView])

    return(
        <div style={transitionDelayTime} ref={imgRef} className={`AboutImgGalleryImg ${inView}`}>
            <img src={img} alt="Charred Restaurant" />
        </div>
    )
}