import React from 'react';
import PropTypes from 'prop-types';
import './ResponsiveGallery.css';
import ResponsiveGalleryImg from './ResponsiveGalleryImg';

ResponsiveGallery.propTypes = {
    columns: PropTypes.number.isRequired,
    imgs: PropTypes.array.isRequired
}

export default function ResponsiveGallery(props) {
    let { columns, imgs, isMobile } = props;
    if(isMobile){
        columns = Math.ceil(columns/2)
    } 

    let columnsArr = [...Array(columns)].map(col => []);

    let counter = 0;
    imgs.forEach((img, imgIdx) => {
        columnsArr[counter].push(img);
        counter++;
        if(counter >= columns){
            counter = 0;
        }
    })

    const COLUMN_SIZE_STYLES = {
        flex: `${1/columns}`,
        maxWidth: `${1/columns}`
    }

    const columnsMap = columnsArr.map((column, idx) => (
        <div key={idx} style={COLUMN_SIZE_STYLES} className="ResponsiveGallery-column">
            {column.map((img, i) => (
                <ResponsiveGalleryImg isMobile={ isMobile } key={`${img}-${i}`} img={ img } />
            ))}
            
        </div>
    ))
    return (
        <div className="ResponsiveGallery">
            { columnsMap }
        </div>
    )
}
