import React from 'react';
import './MenuCategory.css';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

const MenuCategory = React.forwardRef(function MenuCategory(props, ref){
    const { categoryID, header, note, menuItems, disableItemModal } = props;

    function extractItems(){
        let menuItemsArr = menuItems.map(item => {
            let optionsArr = [];
            if(item.options !== undefined){
                item.options.forEach(option => {
                    optionsArr.push(<p key={ option.option_name } className="MenuItem-itemOption">{option.option_name} - +${option.option_price.toFixed(2)}</p>)
                })
            }
            return <MenuItem key={ item.name } item={ item } optionsArr={ optionsArr } disableItemModal={ disableItemModal } />
        })

        return menuItemsArr;
    }

    return(
        <div ref={ref} data-categoryid={categoryID} className="MenuCategory">
            <h3 className="MenuCategory-boardHeader">{header}</h3>
            <p className="MenuCategory-boardHeaderNote">{note}</p>
            <div className="MenuCategory-itemList">
                { extractItems() }
            </div>
        </div>
    )
})

MenuCategory.propTypes = {
    categoryID: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    note: PropTypes.string,
    menuItems: PropTypes.array.isRequired,
    disableItemModal: PropTypes.bool.isRequired
}

export default MenuCategory;