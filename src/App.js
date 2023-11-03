import { useState, useEffect } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';


function App(){
    const [books, setBooks] = useState([]);

    const fetchAllBooks = async () => {
        const booksContainer = await axios.get('http://localhost:3001/books');

        const booksStart = booksContainer.data;
        setBooks(booksStart);
    }

    useEffect(() => {
        fetchAllBooks();
    }, []);

    const deleteBookById = async (id) => {
        const url = 'http://localhost:3001/books/' + id;
        const deleteBookContainer = await axios.delete(url);



        const updatedBooksArray = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooksArray);
    }
    const handleCreateBook = async (title, imageSrc) => {
        const response = await axios.post('http://localhost:3001/books', {
            title: title,
            imageSrc: imageSrc
        });
        const book = response.data;
        setBooks([...books, book]);
    };

    const handleEditBook = async (id, newTitle) => {
        const url = 'http://localhost:3001/books/' + id;

        const editedBookContainer = await axios.put(url, {
            title: newTitle
        });
        
        const editedBook = editedBookContainer.data;
        const updatedBooksArray = books.map((book) => {
           if(book.id === id){
            return {...book, ...editedBook};
           }
           return book;
        });
        setBooks(updatedBooksArray);
    };

    

    const handleDeleteBook = () => {

    };

    return (
        <div className='app'>
            <BookList books={books} onDelete={deleteBookById} onEdit={handleEditBook} />
            <BookCreate onBookCreate={handleCreateBook} />
        </div>
    );
}

export default App;