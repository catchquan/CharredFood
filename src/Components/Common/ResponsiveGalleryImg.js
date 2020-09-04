import React, { useState, useContext, useRef } from 'react'
import { ToggleModalContext } from '../../Charred';
import ModalImg from '../Common/ModalImg';
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types';
import './ResponsiveGalleryImg.css';

ResponsiveGalleryImg.propTypes = {
    img: PropTypes.string.isRequired
}

export default function ResponsiveGalleryImg(props) {
    const { img, isMobile } = props;
    const [imgRef, inView] = useInView({ threshold: .1 })
    const inViewClass = inView ? 'inView' : null;

    const toggleModal = useContext(ToggleModalContext)
    const itemModal = <ModalImg img={ img } />

    const inputRef = useRef();
    const shareBtnRef = useRef();

    const [shareClicked, setSharedClicked] = useState(false)

    function handleShareClick(){
        setSharedClicked(true)
        setTimeout(() => {
            setSharedClicked(false)
        }, 1500);
        if(shareBtnRef.current.parentNode.previousSibling){
            inputRef.current.value = shareBtnRef.current.parentNode.previousSibling.currentSrc;
        }
        inputRef.current.select();
        document.execCommand('copy')
    }

    function handleImgClick(e){
        if(!e.target.dataset.preventOpen){
            toggleModal(itemModal, true)
        }
    }

    return (
        <div onClick={ handleImgClick } style={{ position: 'relative', overflow: 'hidden' }}>
            <img
                ref={ imgRef } 
                className={`ResponsiveGalleryImg ${inViewClass}`} 
                src={ img } 
                alt='Charred Food Team'
            />
            <div className="ResponsiveGalleryImg-footer">
                <i 
                    style={ isMobile ? { display: 'none' } : null }
                    ref={ shareBtnRef } 
                    onClick={ handleShareClick } 
                    className={`ResponsiveGalleryImg-shareBtn ${shareClicked ? 'clicked' : null} fas fa-share-square`}
                    data-prevent-open={ true }>
                    <div className={`ResponsiveGalleryImg-shareBtnMsg ${shareClicked ? 'clicked' : null}`}>Link Copied!</div>
                </i>
                <i onClick={ toggleModal.bind(null, itemModal, true) } className="fas fa-expand"></i>
            </div>
            <input className="ResponsiveGalleryImg-dummyInp" ref={inputRef} type="text"/>
        </div>
    )
}
