import BookShow from "./BookShow";

function BookList({ books }){
    console.log("Book list from BookList: ", books);
    const renderedBooks = books.map((book) => {
        console.log("Book object from BookList", book);
        
        console.log("Book.title from BookList", book.title);
       return  <BookShow key={book.id} book={book} /> ;
    });
    return(
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}

export default BookList;