import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    };
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const onTitleChange = (title) => {
        console.log("Title was: ", title, ". Book ID was: ", book.id);
        onEdit(book.id, title);
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;

    if (showEdit){
        content = <BookEdit book={book} onEdit={onTitleChange}/>;
    }



    return(
        <div className="book-show" id={book.id}>
            {content}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>X</button>
            </div>
        </div>
    )
}

export default BookShow;