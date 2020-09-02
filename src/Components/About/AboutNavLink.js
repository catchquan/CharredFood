import React from 'react';
import PropTypes from 'prop-types';
import './AboutNavLink.css';

AboutNavLink.propTypes = {
    linktext: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired,
    isNavOpen: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    openNav: PropTypes.func.isRequired,
    selectActiveNav: PropTypes.func.isRequired
}

function AboutNavLink(props){
    const { linktext, isMobile, isNavOpen, isActive, openNav, selectActiveNav } = props;

    function handleClick(){
        if(!isNavOpen && isMobile){
            openNav();
        } else {
            selectActiveNav(linktext)
        }
    }

    function setClasses(){
        if(!isNavOpen && !isActive){
            return "AboutNavLink--hide";
        } else if(isNavOpen){
            return "AboutNavLink--navIsOpen";
        }
    }

    let activeStyles = isActive ? 'active' : null;

    return (
        <li onClick={ handleClick } className={`${setClasses()} ${activeStyles} AboutNavLink`}>
            <p>{ linktext }</p>
            {isActive ? <i className={`AboutNavLink-arrow fas fa-chevron-down`} /> : null}
        </li>
            
    )
}

export default AboutNavLink;