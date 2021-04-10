import React from 'react'

import './book-item.styles.css'

const BookItem = ({name, publish_year, price}) => {
    return (
        <div className="book-item">
            <img 
                src={`https://edit.org/images/cat/book-covers-big-2019101610.jpg`} 
                alt="bookcover"
                className="book-cover" 
            />
            <h5>{name}</h5>
            <div className="book-info">
                <p>{publish_year}</p>
                <p>Rs. {price}</p>
            </div>
        </div>
    );
}

export default BookItem;
