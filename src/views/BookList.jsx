import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ListComponent from '../components/ListComponent';

const mockData = [
    {
        isbn: 'foo-bar',
        title: 'My example Title',
        author_first: 'Dex',
        author_last: 'Decker',
    },
    {
        isbn: 'bar-foo',
        title: 'My example Title II',
        author_first: 'James',
        author_last: 'Pendleton',
    },
    {
        isbn: 'baz-bar',
        title: 'My example Title III',
        author_first: 'Dex',
        author_last: 'Decker',
    },
    {
        isbn: 'baz-foo',
        title: 'My example Title IV',
        author_first: 'James',
        author_last: 'Pendleton',
    },
];

const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            const fetchedBooks = await axios.get('http://localhost:8080/books');
            setBooks(fetchedBooks.data);
        }
        fetchBooks();
    }, []);

    return <ListComponent list={books} />;
};

export default BooksList;
