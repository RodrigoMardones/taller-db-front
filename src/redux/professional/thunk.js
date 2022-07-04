import { createAsyncThunk } from '@reduxjs/toolkit';
import createUser from './api';

const createUserThunk = createAsyncThunk(
    'professional/createUser',
    async (payload, {rejectWithValue, ..._rest}) => {
        try {
            console.log("llegamos al thunk");
            const created = await createUser(payload);
            return created;
        } catch(e) {
            return rejectWithValue([], err);
        }
    }
)
export default createUserThunk;