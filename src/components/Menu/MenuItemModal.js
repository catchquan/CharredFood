import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MenuItemModal.css';
import placeholderImg from '../../imgs/menu_item_imgs/menu-item-placeholder.jpg';
import placeholderImg2 from '../../imgs/menu_item_imgs/menu-item-placeholder2.jpg';

MenuItemModal.propTypes = {
    item: PropTypes.object.isRequired
}

function MenuItemModal(props){
    const { item } = props;

    if(typeof item.imgs === 'undefined'){
        item.imgs = [placeholderImg, placeholderImg2];
    }

    if(typeof item.allergies === 'undefined'){
        item.allergies = ['List', 'of', 'allergies', 'goes', 'here']
    }

    let [currentImgIdx, setCurrentImgIdx] = useState(0)
    function changeImg(newIdx){
        setCurrentImgIdx(newIdx)
    }

    function genImgs(){
        let imgArr = item.imgs.map((img, i) => {
            let activeImgCheck = currentImgIdx === i ? 'MenuItemModal-imgBoxImg--active' : null;
            return (
                <img
                    key={ img } 
                    className={`${activeImgCheck} MenuItemModal-imgBoxImg`} 
                    src={ img } alt=""
                />
            )
        })

        return imgArr;
    }

    function genImgCounter(){
        let imgCounterArr = item.imgs.map((img, i) => {
            let setActiveCounter = i === currentImgIdx ? 'MenuItemModal-imgCounterCircle--active' : null;
            return (
                <div
                    onClick={changeImg.bind(null, i)}
                    key={img}
                    className={`MenuItemModal-imgCounterCircle ${setActiveCounter}`}>
                </div>
            )
        })

        return imgCounterArr;
    }

    let [itemModalOpen, setItemModalOpen] = useState(false)
    let modalOpenAni = itemModalOpen ? 'MenuItemModal--open' : null;
    useEffect(() => {
        setItemModalOpen(true);
    }, [])

    return (    
        <div className={`MenuItemModal ${modalOpenAni}`}>
            <div className="MenuItemModal-header">
                <p>{ item.name }</p>
            </div>
            <div className="MenuItemModal-imgBox">
                { genImgs() } 
                <i 
                    onClick={changeImg.bind(null, currentImgIdx - 1)} 
                    className={`${currentImgIdx === 0 ? 'hide' : null} MenuItemModal-imgBoxArrow fas fa-chevron-left`}>
                </i>
                <i 
                    onClick={changeImg.bind(null, currentImgIdx + 1)} 
                    className={`${currentImgIdx === item.imgs.length - 1 ? 'hide' : null} MenuItemModal-imgBoxArrow fas fa-chevron-right`}>
                </i>
            </div>
            <div className="MenuItemModal-imgCounter">
                { genImgCounter() }
            </div>
            <div className="MenuItemModal-infoBox">
                <div className="MenuItemModal-infoBoxSection">
                    <h4>Ingredients:</h4>
                    <p>{item.description}</p>
                </div>
                <div className="MenuItemModal-infoBoxSection">
                    <h4>Allergies:</h4>
                    <p>{item.allergies.reduce((acc, al) => `${acc}, ${al}`)}</p>
                </div>
                <div className="MenuItemModal-infoBoxSection">
                    <h4>Price:<span>${item.price.toFixed(2)}</span></h4>
                </div>
            </div>
        </div>
    )
}

export default MenuItemModal;