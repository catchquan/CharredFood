import React, { useState, useEffect } from 'react';
import './AboutNav.css';
import AboutNavLink from './AboutNavLink';
import PropTypes from 'prop-types';

AboutNav.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    links: PropTypes.array.isRequired,
    returnActiveNav: PropTypes.func.isRequired
}

function AboutNav(props){
    const { isMobile, links, returnActiveNav } = props;

    let [isNavOpen, setIsNavOpen] = useState(false);
    function openNav(){
        setIsNavOpen(true)
    }

    let [activeNav, setActiveNav] = useState(links[1])
    function selectActiveNav(keyword){
        setActiveNav(keyword)
        setIsNavOpen(false)
    }

    useEffect(() => {
        returnActiveNav(activeNav)
    }, [activeNav, returnActiveNav])

    return (
        <nav className="AboutNav">
            <ul className="AboutNav-navList">
                {links.map((link, i) => (
                    <AboutNavLink
                    key={ link[i] }
                    isMobile={ isMobile }
                    linktext={ link } 
                    openNav={ openNav }
                    selectActiveNav={ selectActiveNav }
                    isNavOpen={ isNavOpen }
                    isActive={ link === activeNav }
                    />
                ))}
            </ul>
        </nav>
    )
}

export default AboutNav;