import { createContext, useState } from "react";
import axios from 'axios';


const BooksContext = createContext();

function Provider( {children} ){
    const [books, setBooks] = useState([]);
    const baseURL = 'http://localhost:3001/books/';
    const fetchAllBooks = async () => {
        const booksContainer = await axios.get(baseURL);
        const booksStart = booksContainer.data;
        setBooks(booksStart);
    }



    const deleteBookById = async (id) => {
        const url = baseURL + id;
        const deleteBookContainer = await axios.delete(url);
        const updatedBooksArray = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooksArray);
    }

    const handleCreateBook = async (title, imageSrc) => {
        const newBookContainer = await axios.post(baseURL, {
            title: title,
            imageSrc: imageSrc
        });
        const book = newBookContainer.data;
        setBooks([...books, book]);
    };

    const handleEditBook = async (id, newTitle) => {
        const url = baseURL + id;
        const originalBookContainer = await axios.get(url);
        const originalBook = originalBookContainer.data; //These lines were needed to keep the imageSrc in tact
        const editedBookContainer = await axios.put(url, {
            title: newTitle,
            imageSrc: originalBook.imageSrc
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
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    ); 
}

export { Provider };
export default BooksContext;