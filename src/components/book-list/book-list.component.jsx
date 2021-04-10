import React, {useEffect} from 'react'
import BookItem from '../book-item/book-item.component'

import {connect} from 'react-redux';
import {books} from '../../data/data'

import { setListOfBooks } from '../../redux/list_of_books/list_of_books.actions'

import './book-list.styles.css'

const BookList = ({listOfBooks, setListOfBooks}) => {
    useEffect(() => {
        setListOfBooks(books)
    }, [setListOfBooks])

    return (
        <div className="book-list">
            {
                listOfBooks.map(({id, ...otherBookProps}) => (
                    <BookItem key={id} {...otherBookProps} />
                ))
            }
        </div>
    );
}

const mapStateToProps = state => ({
    listOfBooks : state.books_list.listOfBooks,
})

const mapDispatchToProps = dispatch => ({
    setListOfBooks : booksList => dispatch(setListOfBooks(booksList))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
