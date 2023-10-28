import {useState} from 'react';

function BookCreate({onBookCreate}){
    const [title, setTitle] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value);
        console.log("title set to: ", title, ". Event target value: ", event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Creating book with title: ", title);
        onBookCreate(title);
        setTitle("");
    }


    return(
        <div className='book-create'>
            <h3>Add a book:</h3>
            <form onSubmit={handleSubmit}>
                <label> Title </label>
                <input className='input' value={title} onChange={handleChange}/>
                <button className='button'>Create</button>
            </form>
        </div>
    )
}

export default BookCreate;