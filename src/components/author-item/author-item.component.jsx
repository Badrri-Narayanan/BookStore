import React from 'react';

import './author-item.styles.css'

const AuthorItem = ({author_name, about}) => (
    <div className="author-item">
        <img 
            src={`https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png`} 
            alt="profile_pic"
            className="author-dp" 
        />
        <div className="item-content">
            <h3>{author_name}</h3>
            <p className="about">{about}</p>
        </div>
    </div>
);

export default AuthorItem;
