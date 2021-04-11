import React, {useState, useRef} from 'react';
import LabeledInput from '../labeled-input/labeled-input.component';

import { appendToListOfBooks } from '../../redux/list_of_books/list_of_books.actions';
import { connect } from 'react-redux';

import './add-book-form.styles.css';

const AddBookForm = ({author_id, toggleForm, appendToListOfBooks}) => {
    const[formInput, setFormInput] = useState({
        bookTitle: '',
        description: '',
        image: '',
        price: '',
        publisher: '',
        publicationDate: ''
    })

    const {bookTitle, description, image, price,publisher, publicationDate} = formInput;

    const handleInputChange = (event) => {
        const {id, value} = event.target;
        setFormInput({
            ...formInput,
            [id] : value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let id = Math.floor((Math.random() * 1000) + 1);
        let publish_year = new Date(publicationDate).getFullYear();
        let newBookItem = {
            author_id,
            id,
            img: image,
            publisher,
            price,
            name: bookTitle,
            description,
            publish_year,
        }
        appendToListOfBooks(newBookItem);
        toggleForm();
    }

    const hiddenFileInput = useRef(null);

    const handleFileUpload = () => {
        hiddenFileInput.current.click();
    }

    const handleChange = (event) => {
        let file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsDataURL(file)
        }
    }

    const _handleReaderLoaded = (readerEvt) => {
        let base64Img = readerEvt.target.result;
        setFormInput({
            ...formInput,
            image: base64Img,
        })
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)} className="add-book-form">
            <LabeledInput 
                labelName="Book Title"
                type="text"
                value={bookTitle} 
                id="bookTitle"
                onChange={(event) => handleInputChange(event)}
                minLength="3"
                maxLength="50"
            required/>
            <LabeledInput
                labelName="Description"
                isTextArea="yes"
                value={description} 
                id="description"
                onChange={(event) => handleInputChange(event)}
                maxLength="300"
            required/>
            <input 
                type="file" 
                ref={hiddenFileInput} 
                accept="image/png,image/jpeg"
                style={{display:'none'}}
                onChange={handleChange} 
            />
            <LabeledInput
                labelName="Image"
                type="text"
                value={image} 
                id="image"
                onChange={(event) => handleInputChange(event)}
                isUploadButtonRequired="yes"
                handleClick={() => handleFileUpload()}
            />
            <LabeledInput
                labelName="Price"
                type="number"
                value={price} 
                id="price"
                onChange={(event) => handleInputChange(event)}
                min="50"
            required/>
            <LabeledInput
                labelName="Publisher"
                type="text"
                value={publisher} 
                id="publisher"
                onChange={(event) => handleInputChange(event)}
                maxLength="50"
            />
            <LabeledInput
                labelName="Publication Date"
                value={publicationDate} 
                id="publicationDate"
                onChange={(event) => handleInputChange(event)}
                type="date"
            />
            <div className="login-options">
                <input 
                    type="button" 
                    onClick={() => toggleForm()} 
                    className="btn btn-default" 
                    value="Cancel" /
                >
                <input 
                    type="submit" 
                    className="btn btn-primary" 
                    value="Save" 
                />
            </div>
        </form>
    );
}

const mapDispatchToProps = dispatch => ({
    appendToListOfBooks : new_book_item => dispatch(appendToListOfBooks(new_book_item)),
})

export default connect(null, mapDispatchToProps)(AddBookForm);
