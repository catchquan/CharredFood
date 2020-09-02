import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import menuData from '../../MenuData/MenuData';
import "./Menu.css";
import MenuCategory from './MenuCategory';
import MenuCategoryBtns from './MenuCategoryBtns';
import headerBackground from '../../imgs/menu-img1.jpg';
import PropTypes from 'prop-types';
import hasLoadingScreen from '../../HOC/hasLoadingScreen';

Menu.propTypes = {
    atTop: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired,
    componentMounted: PropTypes.bool.isRequired,
    loadingMessage: PropTypes.bool.isRequired,
    disableLoading: PropTypes.bool.isRequired,
    disableItemModal: PropTypes.bool.isRequired
}

function Menu(props){
    const { atTop, isMobile, disableItemModal } = props;

    //SCROLL TO CATEGORY CODE
    function executeScroll(categoryID){
        let elTopPosition = refObj.current[categoryID].offsetTop;
        let navSize = isMobile ? 100 : 130;

        let scrollOptions = {
            top: atTop ? elTopPosition - navSize : elTopPosition - 100,
            behavior: "smooth"
        }

        window.scrollTo(scrollOptions)
    }

    //CREATE REFERENCE FOR SCROLL TO CATEGORY
    let refObj = useRef({});
    refObj.current = {};

    let menuDataArr = Object.keys(menuData).map(categoryID => {
        return menuData[categoryID]
    })
    // ------- //

    let headerBackgroundStyle = {
        background: `url(${headerBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const [menuPageRef, inView] = useInView()

    return (
        <div ref={ menuPageRef } className={`Menu ${ inView ? 'inView' : null}`}>
            <div className="Menu-headerArea Menu-headerArea--first" style={headerBackgroundStyle}>
                <p className='Menu-header'>Focused on every detail, <span className="Menu-brand">Charred</span> brings our backyard to <span>you</span></p>
            </div>
            <div className='Menu-headerArea Menu-headerArea--secondary'>
                <i className='fas fa-hamburger'></i>
                <h3>The Menu</h3>
                <MenuCategoryBtns
                    menuDataArr={menuDataArr}
                    executeScroll={executeScroll} 
                />
            </div>
            <div className='Menu-board'>
                {menuDataArr.map(category => (
                    <MenuCategory
                        key={category.categoryID}
                        header={category.header}
                        note={category.note}
                        menuItems={category.menuItems}
                        ref={e => refObj.current[category.categoryID] = e}
                        categoryID={category.categoryID}
                        disableItemModal={ disableItemModal }
                    />
                ))}
            </div>
            <div onClick={() =>  window.scrollTo({ top: 0, behavior: "smooth" })} 
                className={`${!atTop ? 'Menu-scrollTop--unhide' : null} Menu-scrollTop`}>
                <i className="fas fa-arrow-up"></i>
                <p>TOP</p>
            </div>
        </div>
    )
}

export default hasLoadingScreen(Menu);