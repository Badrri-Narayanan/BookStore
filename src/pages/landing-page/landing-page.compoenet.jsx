import React from 'react';

import { Route } from 'react-router-dom'

import { connect } from 'react-redux'
import AuthorListingPage from '../authors-listing-page/author-listing-page.component';
import BookListingPage from '../books-listing-page/book-listing-page.component';

const LandingPage = ({accessLevel}) => (
    <div>
        <Route exact path="/" render={() => accessLevel === "admin" ? <AuthorListingPage /> : <BookListingPage /> } />
    </div>
);

const mapStateToProps = state => ({
    accessLevel : state.access_level.accessLevel
})

export default connect(mapStateToProps)(LandingPage);