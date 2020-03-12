import axios from 'axios';

// Make and export an object jsonPlaceholder
// that can send all the requests to the api base endpoint url

export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});