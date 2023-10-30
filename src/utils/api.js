import axios from 'axios';


const PEXELS_KEY = process.env.REACT_APP_PEXELS_API_KEY;


const getImage = async (searchTitle) => {
    const basePhotoURL = "https://api.pexels.com/v1/search?"
    console.log("Key was: ", PEXELS_KEY);
    const response = await axios.get( basePhotoURL,
        {
            headers:{
                Authorization: PEXELS_KEY
            },
            params:{
                query: searchTitle,
                per_page: 1,
                orientation: "square"
            }
        }
    );
    console.log("Photos response: ", response);
    return response.data.photos[0].src.tiny;
}

export default getImage;