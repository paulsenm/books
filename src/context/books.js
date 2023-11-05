import { createContext, useState, useEffect } from "react";
import axios from 'axios';


const BooksContext = createContext();

function Provider( {children} ){
    const [books, setBooks] = useState([]);

    const fetchAllBooks = async () => {
        const booksContainer = await axios.get('http://localhost:3001/books');
        const booksStart = booksContainer.data;
        setBooks(booksStart);
    }



    const deleteBookById = async (id) => {
        const url = 'http://localhost:3001/books/' + id;
        const deleteBookContainer = await axios.delete(url);
        const updatedBooksArray = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooksArray);
    }

    const handleCreateBook = async (title, imageSrc) => {
        const newBookContainer = await axios.post('http://localhost:3001/books', {
            title: title,
            imageSrc: imageSrc
        });
        const book = newBookContainer.data;
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

    
const valueToShare = {
    books,
    fetchAllBooks,
    deleteBookById,
    handleCreateBook,
    handleEditBook
};

    return (
        <BooksContext.Provider value={{}}>
            {children}
        </BooksContext.Provider>
    ); 
}

export { Provider };
export default BooksContext;