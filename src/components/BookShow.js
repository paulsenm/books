

function BookShow({ book, onDelete }){
    console.log("Book.title from BookShow", book.title);
    const handleDeleteClick = () => {
        onDelete(book.id);
    }
    return(
        <div className="book-show" id={book.id}>
            {book.title}
            <div className="actions">
                <button className="delete" onClick={handleDeleteClick}>X</button>
            </div>
        </div>
    )
}

export default BookShow;