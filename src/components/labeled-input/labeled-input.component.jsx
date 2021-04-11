import React from 'react';

import './labeled-input.styles.css'

const LabeledInput = ({labelName, handleClick, isTextArea, isUploadButtonRequired, ...otherProps}) => (
    <div className="label-box-container">
        <label>{labelName}</label>
        <div className="input-field">
            {
                (isTextArea === undefined) ?
                <input className={`${(isUploadButtonRequired !== undefined)? "with-button" : "box-size"}`} 
                    {...otherProps}/>
                :
                <textarea {...otherProps} className="box-size" />
            }
            {
                (isUploadButtonRequired !== undefined)?
                <button className="upload-btn" type="button" onClick={() => handleClick()} >Upload</button>
                :
                null
            }
        </div>
    </div>
)

export default LabeledInput;
