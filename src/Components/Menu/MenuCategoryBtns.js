import React, { useRef, useEffect, useState } from 'react';
import './MenuCategoryBtns.css';
import PropTypes from 'prop-types';
import dragScroll from '../../Utilities/dragScroll';

MenuCategoryBtns.propTypes =  {
    menuDataArr: PropTypes.array,
    currentCategory: PropTypes.string,
    executeScroll: PropTypes.func
}

export default function MenuCategoryBtns(props){
    const { menuDataArr, currentCategory, executeScroll } = props;

    const [isScrolling, setIsScrolling] = useState(false);
    const categoryRef = useRef();
    useEffect(() => dragScroll(categoryRef, { stateSetter: setIsScrolling }), [])

    const genMenuCat = menuDataArr.map(category => (
        <li 
            key={ category.categoryID }
            className={currentCategory === category.categoryID ? 'MenuCategoryBtns-activeCategory MenuCategoryBtns-btn' : 'MenuCategoryBtns-btn'} 
            onClick={() => !isScrolling ? executeScroll(category.categoryID) : null }
            ><p>{ category.header }</p>
        </li>
    ))

    return(
        <ul ref={ categoryRef } className="MenuCategoryBtns">
            {genMenuCat}
        </ul>
    )
}