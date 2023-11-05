import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

function BookShow({book}) {

    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useContext(BooksContext);
    

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = 
        <>
        <h3>{book.title}</h3>
        <img src={book.imageSrc} alt={`Picture of ${book.title}`} />
        </>
    
        ;

    if (showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
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