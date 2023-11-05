import { useState, useContext } from 'react';

import BooksContext from '../context/books';


function BookEdit({ book, onSubmit }){
    const [title, setTitle] = useState(book.title);
    const {handleEditBook} = useContext(BooksContext);

    const handleInputChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTitleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        handleEditBook(book.id, title)
    };


    return(
        <div>
            <form onSubmit={handleTitleSubmit}>
                <label>Title</label>
                <input className='input' onChange={handleInputChange} value={title}/>
                <button className='button is-primary'>Save</button>
            </form>
        </div>
    )
}

export default BookEdit;