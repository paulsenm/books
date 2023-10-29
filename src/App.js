import { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App(){
    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
        const updatedBooksArray = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooksArray);
    }
    const handleCreateBook = (title) => {
        console.log("Title was: ", title);
        const bookId = Math.floor(Math.random() * 1000);
        const book = {
            id: bookId,
            title: title
        }
        const updatedBooksArray = [...books, book];
        setBooks(updatedBooksArray);
        console.log(books);
    };

    const handleEditBook = () => {

    }

    const handleDeleteBook = () => {

    }

    return (
        <div className='app'>
            <BookList books={books} onDelete={deleteBookById} />
            <BookCreate onBookCreate={handleCreateBook} />
        </div>
    )
}

export default App;