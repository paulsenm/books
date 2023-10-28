

function BookShow({ book }){
    console.log("Book.title from BookShow", book.title);
    return(
        <div className="book-show">
            {book.title}
        </div>
    )
}

export default BookShow;