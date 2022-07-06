import axios from 'axios';

const findAllSchdules = async (id, headers ) => {
    try {
        const res = await axios.get(`${process.env.BACKEND_URL}/schedule/professional/${id}`,{
            headers
        });
        return res.data;
    } catch(e){
        return [];
    }
}
export {
    findAllSchdules,
}