import axios from 'axios';

export const axiosWithAuth = () => {
    return.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
};