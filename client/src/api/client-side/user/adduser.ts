import axios from 'axios';

export const addUser = async (username: string, password: string): Promise<boolean> => {

    try{
        const response = await axios.post('http://localhost:4000/account/create', {
            data: {
                username: username,
                password: password
            }
        });
        return response.status === 201;
    } catch (e) {
        return false;
    }

};