import React from 'react';
import InputBox from '../input-box/input-box.component';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setBookSearchQuery } from '../../redux/list_of_books/list_of_books.actions'

import './author-profile-header.styles.css'

const AuthorProfileHeader = ({authorName, history, searchQuery, setBookSearchQuery}) => {
    const handleSearch = (event) => {
        const {value} = event.target;
        setBookSearchQuery(value);
    }
    return (
        <div className="author-profile-header">
            <button onClick={() => history.push('/')}><span className="arrow-btn">&#8678;</span></button>
            <p className="title">{`${authorName}'s Books`}</p>
            <div className="search-box-container">
                <InputBox 
                    type="search"
                    value={searchQuery}
                    placeholder="Books"
                    onChange={(event) => handleSearch(event)}
                />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    searchQuery : state.books_list.searchQuery,
})

const mapDispatchToProps = dispatch => ({
    setBookSearchQuery : query => dispatch(setBookSearchQuery(query)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthorProfileHeader));
