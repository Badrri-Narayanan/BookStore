import React from 'react';
import LabeledInput from '../labeled-input/labeled-input.component';

import './add-book-form.styles.css';

const AddBookForm = ({toggleForm}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        return
    }
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
            <LabeledInput
                labelName="Image"
                type="text"
                isButtonRequired="yes"
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
                <input type="button" onClick={() => toggleForm()} className="btn btn-default" value="Cancel" />
                <input type="submit" className="btn btn-primary" value="Save" />
            </div>
        </form>
    );
}

export default AddBookForm;
