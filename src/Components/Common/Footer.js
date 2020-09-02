import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
// import GoogleMapContainer from './GoogleMapContainer';

Footer.propTypes = {
    atTop: PropTypes.bool.isRequired
}

export default function Footer(props){
    const { atTop } = props;

    return (
        <footer className="Footer">
            <div className="Footer-hr">
                <div className="Footer-hrAccent"></div>
                <div className="Footer-hrAccent"></div>
            </div>
            <div className="Footer-section">
                <div className="Footer-info">
                    <div className="Footer-infoSection">
                        <h3>Address</h3>
                        <a href='https://www.google.com/maps/place/13047+Worldgate+Dr,+Herndon,+VA+20170/data=!4m2!3m1!1s0x89b647f2ad54d507:0x9d61b4bf58891f33?sa=X&ved=2ahUKEwjO1ZSbnsnrAhWUmHIEHT2_A-gQ8gEwAHoECAsQAQ' target="_blank" rel="noopener noreferrer">13047 Worldgate Dr, Herndon, VA 20170</a>
                    </div>
                    <div className="Footer-infoSection">
                        <h3>Hours Of Operation</h3>
                        <p>Monday - Saturday: 11am - 9pm</p>
                        <p>Sunday: 11am - 5pm</p>
                    </div>
                    <div className="Footer-infoSection">
                        <h3>Contact Phone #</h3>
                        <a className='Footer-phone' href="tel:703-435-8300"><p>(703)-435-8300</p></a>
                    </div>
                </div>
                {/* <div className="Footer-map">
                    <GoogleMapContainer/>
                </div> */}
            </div>
            <div className="Footer-social">
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
            <div className="Footer-message">
                <p>Our sites are designed according to web accessibility standards, and we are in the process of making additional modifications to ensure a better user experience. If you have any questions, please contact us at <span>charredfood.contact@gmail.com</span></p>
            </div>
            <div className={`Footer-callBtn ${atTop ? '' : 'Footer-callBtn--unhide'}`}>
                <a href="tel:703-435-8300">
                    <i className="fas fa-phone-alt"></i>
                    <p>(703)-435-8300</p>
                </a>
            </div>
        </footer>
    )
}