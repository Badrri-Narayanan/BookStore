import React from 'react';
import InputBox from '../input-box/input-box.component';

import {connect} from 'react-redux';

import './author-list-header.styles.css'
import { setAuthorSearchString } from '../../redux/list_of_authors/list_of_authors.actions'

const AuthorListHeader = ({authorSearch, setAuthorSearchString}) => {
    const handleSearch = (event) => {
        const {value} = event.target;
        setAuthorSearchString(value);
    }
    return (
        <div className="author-list-header">
            <p className="title">Authors</p>
            <div className="author-search">
                <InputBox 
                    type="search"
                    value={authorSearch}
                    placeholder="Authors"
                    onChange={(event) => handleSearch(event)}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    authorSearch : state.authors_list.authorSearch
})

const mapDispatchToProps = dispatch => ({
    setAuthorSearchString : query => dispatch(setAuthorSearchString(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorListHeader);