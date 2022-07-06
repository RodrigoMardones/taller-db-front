import axios from 'axios';

const loginProfessional = async (params, headers ) => {
    try {
        const res = await axios.post(`${process.env.BACKEND_URL}/professional/login`, params, {
            headers
        });
        return res.data;
    } catch(e){
        return '';
    }
}

const logoutProfessional = async (params, headers) => {
    try {
        await axios.post(`${process.env.BACKEND_URL}/professional/logout`, params, {
            headers
        });
    } catch(e){
        return e;
    }
}

export {
    loginProfessional, 
    logoutProfessional
};