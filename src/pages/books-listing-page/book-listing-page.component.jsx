import React from 'react';
import BookListHeader from '../../components/book-list-header/book-list-header.component';
import BookList from '../../components/book-list/book-list.component';

import './book-listing-page.styles.css'

const BookListingPage = () => (
    <div className="book-listing-page">
        <BookListHeader />
        <BookList />
    </div>
);

export default BookListingPage;