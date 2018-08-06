import React from 'react';
import HeaderBook from './headerBook';
import BodyBook from './bodyBook';
import FooterBook from './footerBook';
import './BookForm.css';

const BookForm = () => {
    return (
        <div className="popup_box">
            <HeaderBook />
            <BodyBook />
            <FooterBook />
        </div>
    );
}

export default BookForm;
