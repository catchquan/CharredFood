import React, { useContext, useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MainStateContext } from '../../Charred';
import './AboutTeam.css';
import AboutTeamPersonnelCard from './AboutTeamPersonnelCard';
import brandonImg from '../../imgs/brandon_portrait.jpg'
import placeholderImg from '../../imgs/placeholder_portrait.jpg'
import ResponsiveGallery from '../Common/ResponsiveGallery';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../imgs/team', false, /\.(png|jpe?g)$/));

export default function AboutTeam(){
    const mainState = useContext(MainStateContext)
    const { isMobile } = mainState;

    const [personnel, setPersonnel] = useState([
        {
            key: 'brandon_moser',
            img: brandonImg,
            firstname: 'Brandon',
            lastname: 'Moser',
            title: 'Owner/Executive Chef',
            email: 'brandon.sean.moser@gmail.com',
            linkin: 'https://www.linkedin.com/in/brandon-moser-b365aa56?trk=people-guest_people_search-card',
            info: 'Exercitation aliqua ea Lorem ad. Elit exercitation commodo sit aliquip eiusmod cillum do enim nulla incididunt. Reprehenderit ex Lorem ad laborum non cillum.',
            popupOpen: false
        },
        {
            key: 'place_holder',
            img: placeholderImg,
            firstname: 'Place',
            lastname: 'Holder',
            title: 'Some Other Person',
            email: 'otherperson@gmail.com',
            linkin: 'https://www.linkedin.com/in/brandon-moser-b365aa56?trk=people-guest_people_search-card',
            info: 'Exercitation aliqua ea Lorem ad. Elit exercitation commodo sit aliquip eiusmod cillum do enim nulla incididunt. Reprehenderit ex Lorem ad laborum non cillum.',
            popupOpen: false,
            flipOrder: true
        }
    ])

    //EMAIL POPUP HANDLERS//
    let emailRef = useRef({});
    emailRef.current = {};
    function handleEmailBtnClick(key){
        let personnelCopy = personnel.map(person => person.key === key ? { ...person, popupOpen: true } : person);
        setPersonnel(personnelCopy)
        emailRef.current[key].select();
        document.execCommand("copy")
    }

    useEffect(() => {
        function handleEvt(e){
            const popupOpen = personnel.some(person => person.popupOpen);
            const closeAllPopups = personnel.map(person => {
                if(e.target.dataset && e.target.dataset.key === person.key){
                    return { ...person, popupOpen: !person.popupOpen }
                } else {
                    return { ...person, popupOpen: false }
                }
            });

            if(e.type === 'click' && !e.target.parentNode.classList.contains("AboutTeamPersonnelCard-emailPopup") && popupOpen){
                setPersonnel(closeAllPopups)
            } else if(e.type === 'scroll' && popupOpen){
                setPersonnel(closeAllPopups)
            } else if(e.type === 'resize' && popupOpen){
                setPersonnel(closeAllPopups)
            }  else return;
        }

        window.addEventListener('click', handleEvt)
        window.addEventListener('scroll', handleEvt)
        window.addEventListener('resize', handleEvt)
        return () => {
            window.removeEventListener('click', handleEvt)
            window.removeEventListener('scroll', handleEvt)
            window.removeEventListener('resize', handleEvt)
        }
    }, [personnel])
    //------------------//

    const [headerRef, headerInView] = useInView({ threshold: 0, triggerOnce: true })
    const headerClass = headerInView ? 'inView' : null;

    return(
        <section className="AboutTeam">
            <div ref={ headerRef } className={`AboutTeam-header ${headerClass}`}>
                <h3>Meet The </h3>
                <h3>Charred Team</h3>
            </div>
            {personnel.map(person => (
                <AboutTeamPersonnelCard 
                    key={ person.key }
                    data={ person } 
                    isMobile={ isMobile } 
                    showEmail={ handleEmailBtnClick } 
                    ref={e => emailRef.current[person.key] = e} 
                />
            ))}
            <p className="AboutTeam-staffHeader">& The Crew</p>
            <ResponsiveGallery isMobile={ isMobile } columns={4} imgs={[...images, ...images, ...images]} />
        </section>
    )
}