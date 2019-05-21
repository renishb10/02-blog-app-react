import { FETCH_POST, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log('ACTION')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_POST,
        payload: data
    }));
};