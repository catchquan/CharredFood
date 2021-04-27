import React from 'react'
import { useInView } from 'react-intersection-observer';
import './AboutTeamPersonnelCard.css';

const AboutTeamPersonnelCard = React.forwardRef(function AboutTeamPersonnelCard(props, ref){
    const { isMobile, data, showEmail } = props;
    const { key, firstname, lastname, title, email, linkedin, info, img, popupOpen, flipOrder } = data;

    const [cardRef, cardInView] = useInView({ threshold: .25, triggerOnce: true })
    const inViewClass = cardInView ? 'inView' : null;

    return (
        <>
        <div ref={ cardRef } className={`AboutTeamPersonnelCard ${flipOrder ? 'flipped' : null} ${ inViewClass }`}>
            <div className="AboutTeamPersonnelCard-img">
                <img src={ img } alt={`Charred Food ${ title }`}/>
            </div>
            <div className="AboutTeamPersonnelCard-info">
                <p className="AboutTeamPersonnelCard-firstname">{ firstname }</p>
                <p className="AboutTeamPersonnelCard-lastname">{ lastname }</p>
                <p className="AboutTeamPersonnelCard-title">{ title }</p>
                <div className="AboutTeamPersonnelCard-iconList">
                    <div onClick={ showEmail.bind(null, key) } className="AboutTeamPersonnelCard-iconContainer">
                        <div className={`AboutTeamPersonnelCard-emailPopup ${popupOpen ? 'unhide' : null}`}>
                            <div className="AboutTeamPersonnelCard-emailPopupMessage">COPIED EMAIL:</div>
                            <input ref={ ref } type="text" value={ email } readOnly />
                        </div>
                        <i data-key={ key } className="AboutTeamPersonnelCard-emailIcon fas fa-envelope"></i>
                    </div>
                    <a className="AboutTeamPersonnelCard-iconContainer" href={ linkedin } target="_blank" rel="noopener noreferrer" >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                {!isMobile ? 
                    <div className="AboutTeamPersonnelCard-infoSnippet">
                        <p>{ info }</p>
                    </div> : null 
                }
            </div>
            {isMobile 
                ?   <div className="AboutTeamPersonnelCard-infoSnippet AboutTeamPersonnelCard-infoSnippet--mobile">
                        <p>{ info }</p>
                    </div>
                :   null 
            }
        </div>
        
        </>
    )
})

export default AboutTeamPersonnelCard;
