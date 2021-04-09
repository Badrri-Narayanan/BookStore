import React from 'react';

import './input-box.styles.css'

const InputBox = ({...otherProps}) => (
    <div className="input-box-container">
        <input className="input-box" {...otherProps}/>
    </div>
)

export default InputBox;
