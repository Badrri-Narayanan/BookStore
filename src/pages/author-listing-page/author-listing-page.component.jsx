import React, {useEffect} from 'react'

import { connect } from 'react-redux';
import { setListOfAuthors } from '../../redux/list_of_authors/list_of_authors.actions';

import {author} from '../../data/data'

const AuthorListingPage = ({listOfAuthors, setListOfAuthors}) => {
    useEffect(() => {
        setListOfAuthors(author)
    }, [setListOfAuthors])

    return (
        <div>
            <h1>Author Listing Page</h1>
            <div>
                {
                    listOfAuthors.map(author => <h2 key={author.id}>{author.author_name}</h2>)
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    listOfAuthors : state.authors_list.listOfAuthors,
});

const mapDispatchToProps = dispatch => ({
    setListOfAuthors : authorsList => dispatch(setListOfAuthors(authorsList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorListingPage);
