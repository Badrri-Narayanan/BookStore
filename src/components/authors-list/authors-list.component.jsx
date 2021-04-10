import React, {useEffect} from 'react';

import { connect } from 'react-redux';
import { setListOfAuthors } from '../../redux/list_of_authors/list_of_authors.actions';

import {author} from '../../data/data'
import AuthorItem from '../../components/author-item/author-item.component';

import './authors-list.styles.css'

const AuthorsList = ({listOfAuthors, setListOfAuthors}) => {
    useEffect(() => {
        setListOfAuthors(author)
    }, [setListOfAuthors])

    return (
        <div className="author-item-list">
            {
                listOfAuthors.map(({...otherAuhtorProps},idx) => (
                    <AuthorItem key={idx} {...otherAuhtorProps} />
                ))
            }
        </div>
    );
}

const mapStateToProps = state => ({
    listOfAuthors : state.authors_list.listOfAuthors,
});

const mapDispatchToProps = dispatch => ({
    setListOfAuthors : authorsList => dispatch(setListOfAuthors(authorsList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsList);
