import React, { useContext } from 'react';
import { ToggleModalContext } from '../../Charred';
import './MenuItem.css';
import MenuItemModal from './MenuItemModal';
import PropTypes from 'prop-types';

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    optionsArr: PropTypes.array,
    disableItemModal: PropTypes.bool.isRequired
}

export default function MenuItem(props){
    const { item, optionsArr, disableItemModal } = props
    const toggleModal = useContext(ToggleModalContext);
    const content = <MenuItemModal item={item} />

    function handleClick(){
        if(!disableItemModal){
            toggleModal(content, true)
        }
    }

    return (
        <div onClick={ handleClick } className='MenuItem'>
            <div className="MenuItem-itemNameAndPriceFlex">
                <p className="MenuItem-itemName">
                    {item.isNew ? <span className="MenuItem--new">NEW!</span> : ""}
                    {item.name}
                </p>
                <span className="MenuItem-itemPrice">${item.price.toFixed(2)}</span>
            </div>
            <p className="MenuItem-itemDesc">{item.description}</p>
            {optionsArr 
                ? <div className="MenuItem-itemOptionList">{optionsArr}</div> 
                : null
            }
        </div>
    )
}