import React, { useState } from 'react';
import './AboutPhilosophy.css';
import AboutPhilosophyCard from './AboutPhilosophyCard';
import locally_sourced from '../../imgs/other_imgs/locally-sourced1-min.jpg';
import high_quality from '../../imgs/other_imgs/high-quality-min.jpg';
import community from '../../imgs/other_imgs/community-min.jpg';
import uuid from 'uuid/v4';

export default function AboutPhilosophy(){
    const [cardData, setCardData] = useState([
        { id: 'local', caption: 'Locally Sourced Ingredients', img: locally_sourced, isFlipped: false, key: uuid() },
        { id: 'quality', caption: 'Providing The Highest Quality', img: high_quality, isFlipped: false, key: uuid() },
        { id: 'community', caption: 'Serving Our Community', img: community, isFlipped: false, key: uuid() }
    ])

    function cardFlip(idx, bool){
        let tempCardData = cardData.map((card, i) => {
            if(idx === i){
                return { ...card, isFlipped: bool };
            } else {
                return { ...card, isFlipped: false };
            }
        })
        setCardData(tempCardData)
    }

    return(
        <div className="AboutPhilosophy">
            <div className="AboutPhilosophyCards">
                {cardData.map((card, i) => (
                    <AboutPhilosophyCard 
                        cardFlipCB={cardFlip} 
                        {...card} 
                        idx={i} 
                    />
                ))}
            </div>
        </div>
    )
}