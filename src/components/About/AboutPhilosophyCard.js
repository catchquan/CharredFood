import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './AboutPhilosophyCard.css';
import PropTypes from 'prop-types';

AboutPhilosophyCard.propTypes = {
    caption: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    cardFlipCB: PropTypes.func.isRequired,
    idx: PropTypes.number.isRequired
}


function AboutPhilosophyCard(props){
    const { caption, img, isFlipped, cardFlipCB, idx } = props;
    const flipped = isFlipped ? 'flipped' : null;

    let [cardRef, cardRefInView] = useInView({ threshold: .25, triggerOnce: true })
    useEffect(() => {
        if(isFlipped && !cardRefInView){
            cardFlipCB(idx, false)
        }
    }, [cardRefInView, isFlipped, idx, cardFlipCB])
    const inView = cardRefInView ? 'inView' : null;

    return(
        <div 
            ref={cardRef} 
            onClick={() => cardFlipCB(idx, !isFlipped)} 
            className={`AboutPhilosophyCard ${flipped} ${inView}`}
        >
            <div className="AboutPhilosophyCard-front">
                <h3 className="AboutPhilosophyCard-header">{ caption }</h3>
                <div 
                    className="AboutPhilosophyCard-imgContainer"
                    style={{ 
                        background: `url(${img})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroungRepeat: 'no-repeat',
                        backdropFilter: 'grayscale(1)'
                    }}
                ></div>
            </div>
            <div className="AboutPhilosophyCard-back">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequuntur est excepturi eum nobis fugiat esse mollitia debitis, officia ad. Omnis ratione illo culpa eaque, repellendus eos debitis eius ad pariatur minima obcaecati ipsum ex, ab a quia tempore magnam laborum corrupti corporis quasi! Excepturi dicta doloremque rem blanditiis omnis.</p>
            </div>
        </div>
    )
}

export default AboutPhilosophyCard;