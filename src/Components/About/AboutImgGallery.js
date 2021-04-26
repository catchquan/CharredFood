import React, { useEffect, useRef } from 'react';
import AboutImgGalleryImg from './AboutImgGalleryImg';
import dragScroll from '../../utilities/dragScroll';
import { useLocation } from 'react-router-dom';
import './AboutImgGallery.css';

function importAll(r) {
	return r.keys().map(r);
}

const images = importAll(require.context('../../imgs/restaurant_stock', false, /\.(png|jpe?g)?/));

export default function AboutImgGallery() {
	const imgGalleryRender = images.map((img, idx) => (
		<AboutImgGalleryImg key={img} img={img} idx={idx} />
	));

	const galleryRef = useRef();
	useEffect(() => {
		dragScroll(galleryRef);
		return dragScroll(galleryRef, { unmount: true });
	}, []);

	const location = useLocation();
	useEffect(() => {
		galleryRef.current.scrollTo({ left: 0 });
	}, [location]);

	return (
		<div ref={galleryRef} className='AboutImgGallery'>
			{imgGalleryRender}
		</div>
	);
}
