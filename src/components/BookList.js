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
                <h3>Count is: {count}</h3>
                <button onClick={incrementCount}>Increment</button>
            </div>
            {renderedBooks}
        </div>
    )
}

export default BookList;