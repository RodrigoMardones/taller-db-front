import axios from 'axios';

const createUser = async (params, headers) => {
    const { data } = await axios.post('/api/user/create', params, {
        headers
    });
    return data;
}
export default createUser;