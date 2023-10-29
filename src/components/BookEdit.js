import { useState } from 'react';



function BookEdit({onEdit, book}){
    const [title, setTitle] = useState(book.title);

    const handleInputChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTitleSubmit = (event) => {
        event.preventDefault();
        onEdit(title);
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