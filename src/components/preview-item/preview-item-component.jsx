import React from 'react';

import './preview-item.styles.scss';

const PreviewItem = ({id, name, price, imageUrl}) => {
    return (
        <div className="preview-item">
            <div className="image" 
            style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="preview-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            {/* <button className="add-button">ADD TO KART</button> */}
        </div>
    )
}

export default PreviewItem;