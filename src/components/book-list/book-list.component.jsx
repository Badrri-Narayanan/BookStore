import React, {useEffect} from 'react'
import BookItem from '../book-item/book-item.component'

import {connect} from 'react-redux';
import {books} from '../../data/data'

import { setListOfBooks } from '../../redux/list_of_books/list_of_books.actions'

import './book-list.styles.css'

const BookList = ({listOfBooks, authorProfileId, selectedAuthorId, searchQuery, setListOfBooks}) => {
    useEffect(() => {
        setListOfBooks(books)
    }, [setListOfBooks])

    let currentAuthorId = selectedAuthorId

    if(authorProfileId !== undefined) {
        currentAuthorId = authorProfileId;
    }

    const filteredByAuthorId = listOfBooks.filter(book => {
        if(currentAuthorId === '') {
            return true
        }
        if(currentAuthorId === book.author_id) {
            return true
        }
        return false
    });

    const filteredByBookName = filteredByAuthorId.filter(book =>
            book.name.toLowerCase().includes(searchQuery.toLowerCase())        
    );
    

    return (
        <div className="book-list">
            {
                filteredByBookName.map(({...otherBookProps},idx) => (
                    <BookItem key={idx} {...otherBookProps} />
                ))
            }
        </div>
    );
}

const mapStateToProps = state => ({
    listOfBooks : state.books_list.listOfBooks,
    searchQuery : state.books_list.searchQuery,
    selectedAuthorId : state.books_list.selectedAuthorId,
})

const mapDispatchToProps = dispatch => ({
    setListOfBooks : booksList => dispatch(setListOfBooks(booksList))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
