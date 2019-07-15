import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-f028c.firebaseio.com/'
});

export default instance;