import React from 'react';
import InputBox from '../input-box/input-box.component';

import { author } from '../../data/data'

import {connect} from 'react-redux';
import {setBookSearchQuery, setSelectedAuthorId} from '../../redux/list_of_books/list_of_books.actions'

import './book-list-header.styles.css';

const BookListHeader = ({searchQuery, setSelectedAuthorId, setBookSearchQuery}) => {
    const handleSearch = (event) => {
        const {value} = event.target;
        setBookSearchQuery(value);
    }
    const handleSelectChange = (event) => {
        const {value} = event.target;
        if(value === "Author") {
            setSelectedAuthorId("")
            return
        }
        setSelectedAuthorId(value)
    }
    return (
        <div className="book-list-header">
            <InputBox 
                type="search"
                value={searchQuery}
                placeholder="Books"
                onChange={(event) => handleSearch(event)}
            />
            <div className="select-container">
                <select onChange={(event) => handleSelectChange(event)} className="author-select">
                    <option default>Author</option>
                    {
                        author.map(({id, author_name}) => (
                            <option key={id} value={id}>{author_name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    searchQuery : state.books_list.searchQuery,
})

const mapDispatchToProps = dispatch => ({
    setBookSearchQuery : query => dispatch(setBookSearchQuery(query)),
    setSelectedAuthorId : id => dispatch(setSelectedAuthorId(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookListHeader);
