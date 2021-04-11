import React, {useEffect, useRef} from 'react';
import LabeledInput from '../labeled-input/labeled-input.component';

import './add-book-form.styles.css';

const AddBookForm = ({toggleForm}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        return
    }

    const inputRef = useRef();
    const hiddenFileInput = useRef(null);

    const handleFileUpload = () => {
        hiddenFileInput.current.click();
    }

    const handleChange = (event) => {
        console.log(event.target.files[0])
    }

    useEffect(()=> {
        inputRef.current.focus();
    })

    return (
        <form onSubmit={(event) => handleSubmit(event)} className="add-book-form">
            <LabeledInput 
                labelName="Book Title"
                type="text"
                minLength="3"
                maxLength="50"
            required/>
            <LabeledInput
                labelName="Description"
                isTextArea
                maxLength="300"
            required/>
            <input 
                type="file" 
                ref={hiddenFileInput} 
                style={{display:'none'}}
                onChange={handleChange} 
            />
            <LabeledInput
                labelName="Image"
                type="text"
                isUploadButtonRequired="yes"
                handleClick={() => handleFileUpload()}
            />
            <LabeledInput
                labelName="Price"
                type="number"
                min="50"
            required/>
            <LabeledInput
                labelName="Publisher"
                type="text"
                maxLength="50"
            />
            <LabeledInput
                labelName="Publication Date"
                type="date"
            />
            <div className="login-options">
                <input type="button" ref={inputRef} onClick={() => toggleForm()} className="btn btn-default" value="Cancel" />
                <input type="submit" className="btn btn-primary" value="Save" />
            </div>
        </form>
    );
}

export default AddBookForm;
