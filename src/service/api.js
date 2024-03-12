import axios from 'axios';

const url = "http://localhost:5000";

export const authenticateSignup = async (existUser) => {
    try {
        return await axios.post(`${url}/signup`, existUser)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}
