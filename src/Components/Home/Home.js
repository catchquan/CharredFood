import React, { useEffect } from 'react';
import './Home.css';
import Logo from '../../imgs/logos/logo-full-black.png'
import PropTypes from 'prop-types';
import { useIsMounting } from '../../custom_hooks/useIsMounting';

Home.propTypes = {
    atTop: PropTypes.bool
}

function Home(props){
    const { atTop } = props;

    const [isMounting, setIsMounting] = useIsMounting();
    useEffect(() => {
        let loadLogo = null;
        if(!atTop){
            setIsMounting(false);
        } else {
            setIsMounting(false);
            loadLogo = setTimeout(() => {
                setIsMounting(true)
            }, 0);
        }

        return (() => {
            clearTimeout(loadLogo)
        })
    }, [atTop, setIsMounting])

    let logoAni = isMounting ? 'Home-logo--loaded' : null;

    return (
        <div className='Home' >
            <div className="Home-parallax">
                <h1 className="Home-brand">CHARRED</h1>
                <img className={`${ logoAni } Home-logo`} src={Logo} alt="Charred Logo"/>
            </div>
            <main className="Home-latest">
                <h1 className="Home-header">Charred Food</h1>
                <p className="Home-message">We have adjusted our offerings and hours of operation so that we can continue to employ our team, help support our furloughed employees, and feed our community with our best hospitality and service in a time of physical distancing. We thank you for your continued support and patronage.</p>
                <p className="Home-message">Guest and colleague safety is our highest priority. We continue to evolve and enhance our safety and cleanliness protocols adhering to the guidance from our local and federal government. Please note that guest must wear masks while not eating or drinking and employees are required to wear masks at all times.</p>
            </main>
        </div>
    )
}

export default Home;