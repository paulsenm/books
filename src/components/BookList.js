import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }){
    console.log("Book list from BookList: ", books);
    const renderedBooks = books.map((book) => {
        console.log("Book object from BookList", book);
        
        console.log("Book.title from BookList", book.title);
        console.log("Book image src was: ", book.imageSrc);
       return  <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} /> ;
    });
    return(
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}

export default BookList;