import React, {useState, useEffect} from 'react';

import {author} from '../../data/data'
import { setListOfAuthors } from '../../redux/list_of_authors/list_of_authors.actions';

import {connect} from 'react-redux';
import AuthorItem from '../../components/author-item/author-item.component';

import BookList from '../../components/book-list/book-list.component';

import './author.profile.styles.css'
import AddBookForm from '../../components/add-book-form/add-book-form.component';
import AuthorProfileHeader from '../../components/author-profile-header/author-profile-header.component';

const AuthorProfilePage = (props) => {
    const {authorId} = props.match.params;
    const {listOfAuthors, setListOfAuthors} = props;
    const [bookFormHidden, toggleBookFormHidden] = useState(true);

    const showForm = () => {
        toggleBookFormHidden(!bookFormHidden);
    }

    useEffect(() => {
        setListOfAuthors(author)
    }, [setListOfAuthors])

    let authorProfile = null;
    authorProfile = listOfAuthors.filter(author => (author.id === authorId))
    let titleName
    try {
        titleName = authorProfile[0].author_name
    } catch {
        titleName = "loading"
    }
    
    return (
        <div>
            <AuthorProfileHeader authorName={titleName} />
            {
                (authorProfile !== null)?
                    <div>
                        <AuthorItem {...authorProfile[0]} />
                        <hr/>
                        {bookFormHidden ? null:<AddBookForm toggleForm={showForm} />}
                        <BookList authorProfileId={authorId} />
                        <div className="book-options">
                            <div className="horizontal-bottom">
                                <hr/>
                            </div>
                            <img
                                className="add-button"
                                onClick={() => showForm()} 
                                src="https://icons-for-free.com/iconfiles/png/512/plus+icon-1320184416519705957.png" 
                                alt="add" 
                            />
                        </div>
                    </div>
                    :
                    <p>Invalid Author Profile</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthorProfilePage);
