import React, { useEffect, useRef, useState } from 'react';
import restaurantStockImg from '../../imgs/restaurant-stock4.jpg';
import restaurantStockImg2 from '../../imgs/restaurant-stock5.jpg';
import restaurantStockImg3 from '../../imgs/restaurant-stock3.jpg';
import restaurantStockImg4 from '../../imgs/restaurant-stock2.jpg';
import AboutImgGalleryImg from './AboutImgGalleryImg';
import dragScroll from '../../Utilities/dragScroll';
import { useLocation } from 'react-router-dom';
// import { useInView } from 'react-intersection-observer';
import uuid from 'react-uuid';
import './AboutImgGallery.css'

export default function AboutImgGallery(){
    let [imgGallery] = useState([
        { img: restaurantStockImg, key: uuid() }, 
        { img: restaurantStockImg2, key: uuid() }, 
        { img: restaurantStockImg3, key: uuid() }, 
        { img: restaurantStockImg4, key: uuid() }, 
        { img: restaurantStockImg4, key: uuid() }, 
        { img: restaurantStockImg2, key: uuid() }, 
        { img: restaurantStockImg, key: uuid() }
    ]);

    let imgGalleryRender = imgGallery.map((img, idx) => (
        <AboutImgGalleryImg key={img.key} img={img.img} idx={idx} />
    ))

    const galleryRef = useRef()
    useEffect(() => {
        dragScroll(galleryRef)
        return dragScroll(galleryRef, { unmount: true })
    }, [])

    const location = useLocation();
    useEffect(() => {
        galleryRef.current.scrollTo({ left: 0 })
    }, [location])

    return(
        <div ref={ galleryRef } className="AboutImgGallery">
            { imgGalleryRender }
        </div>
    )
}