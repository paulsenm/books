import {useState} from 'react';

import getImage from '../utils/api';

function BookCreate({onBookCreate}){
    const [title, setTitle] = useState("");
    const [imageSrc, setImageSrc] = useState("");



    const handleChange = (event) => {
        setTitle(event.target.value);
        console.log("title set to: ", title, ". Event target value: ", event.target.value);
    };

    const handleSubmit =  async (event) => {
        event.preventDefault();
        console.log("Creating book with title: ", title);
        try{
            const imageURL = await getImage(title)
            setImageSrc(imageURL);
            onBookCreate(title, imageURL);
            
        }
        catch(error){
            console.log(error);
        }
        setTitle("");


    };


    return(
        <div className='book-create'>
            <h3>Add a book:</h3>
            <form onSubmit={handleSubmit}>
                <label> Title </label>
                <input className='input' value={title} onChange={handleChange}/>
                <button className='button'>Create</button>
            </form>
        </div>
    );
}

export default BookCreate;