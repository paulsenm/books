import { useContext } from "react";

import BookShow from "./BookShow";
import BooksContext from "../context/books";

function BookList({ books, onDelete, onEdit }){
    const { count, incrementCount } = useContext(BooksContext);
    //const val = useContext(BooksContext);
    const renderedBooks = books.map((book) => {
       return  <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} /> ;
    });
    return(
        <div className="book-list">
            <div>
            </div>
            {renderedBooks}
        </div>
    )
}

export default BookList;