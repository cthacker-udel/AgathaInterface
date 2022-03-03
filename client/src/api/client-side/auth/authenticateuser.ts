import axios from 'axios';

export const authenticateUser = async (username: string, password: string) => {

    const response = await axios.post('http://localhost:4000/account/login', {
        data: { username: username, password: password }
    });


}