import React from 'react';
import './HamburgerMenu.css';
import PropTypes from 'prop-types';

HamburgerMenu.propTypes = {
    hamburgerMenuOpen: PropTypes.bool.isRequired,
    mobileLinks: PropTypes.array.isRequired
}

function HamburgerMenu(props){
    const { hamburgerMenuOpen, mobileLinks } = props;
    const hamburgerMenuAni = hamburgerMenuOpen ? 'open' : null;

    return (
        <div className={`${hamburgerMenuAni} HamburgerMenu`}>
            <ul className="HamburgerMenu-menu">
                {hamburgerMenuOpen ? mobileLinks : null}
            </ul>
            <div className="HamburgerMenu-social">
                <a href="https://facebook.com/CharredFoods/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/charred.foods/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/CharredFoods" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
        </div>
    )
}

export default React.memo(HamburgerMenu);
