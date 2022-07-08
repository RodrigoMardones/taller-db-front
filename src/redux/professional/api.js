import axios from 'axios';

const createUser = async (params, headers) => {
    const res = await axios.post('/api/user/create', params, {
        headers
    });
    return res.data;
}

const createProfessional = async (params, headers ) => {
    const res = await axios.post(`${process.env.BACKEND_URL}/professional/create`, params, {
        headers
    });
    return res.data;
}

export {
    createUser,
    createProfessional,
};