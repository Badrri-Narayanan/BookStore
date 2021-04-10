import React, {useEffect} from 'react';

import { connect } from 'react-redux';
import { setListOfAuthors } from '../../redux/list_of_authors/list_of_authors.actions';

import {author} from '../../data/data'
import AuthorItem from '../../components/author-item/author-item.component';

import './authors-list.styles.css'
import AuthorListHeader from '../author-list-header/author-list-header.component';

const AuthorsList = ({listOfAuthors, authorSearch, setListOfAuthors}) => {
    useEffect(() => {
        setListOfAuthors(author)
    }, [setListOfAuthors])

    const filteredAuthorList = listOfAuthors.filter(
        authorItem => authorItem.author_name.toLowerCase().includes(authorSearch.toLowerCase())
    );

    return (
        <div>
            <AuthorListHeader />
            <div className="author-item-list">
                {
                    filteredAuthorList.map(({...otherAuhtorProps},idx) => (
                        <AuthorItem key={idx} {...otherAuhtorProps} />
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    listOfAuthors : state.authors_list.listOfAuthors,
    authorSearch : state.authors_list.authorSearch,
});

const mapDispatchToProps = dispatch => ({
    setListOfAuthors : authorsList => dispatch(setListOfAuthors(authorsList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsList);
