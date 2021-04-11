import React from 'react';

import { Link } from 'react-router-dom'

import './author-item.styles.css'

const AuthorItem = ({id, author_name, img, about}) => {
    return (
        <Link to={`/author/${id}`} className="author-item" >
            <img 
                src={img} 
                alt="profile_pic"
                className="author-dp" 
            />
            <div className="item-content">
                <h3>{author_name}</h3>
                <p className="about">{about}</p>
            </div>
        </Link>
    );
}

export default AuthorItem;
