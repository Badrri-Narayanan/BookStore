import React from 'react';

import './labeled-input.styles.css'

const LabeledInput = ({labelName, isTextArea, isButtonRequired, ...otherProps}) => (
    <div className="label-box-container">
        <label>{labelName}</label>
        <div className="input-field">
            {
                (isTextArea === undefined) ?
                <input className={`${(isButtonRequired !== undefined)? "with-button" : "box-size"}`} 
                    {...otherProps}/>
                :
                <textarea className="box-size" />
            }
            {
                (isButtonRequired !== undefined)?
                <button className="upload-btn">Upload</button>
                :
                null
            }
        </div>
    </div>
)

export default LabeledInput;
