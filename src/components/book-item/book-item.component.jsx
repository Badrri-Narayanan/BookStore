import React from 'react'

import './book-item.styles.css'

const BookItem = ({name, publish_year, price, img}) => {
    return (
        <div className="book-item">
            <img 
                src={img} 
                alt="bookcover"
                className="book-cover" 
            />
            <h6>{name}</h6>
            <div className="book-info">
                <p>{publish_year}</p>
                <p>Rs. {price}</p>
            </div>
        </div>
    );
}

export default BookItem;
