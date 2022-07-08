import { loginProfessional, logoutProfessional } from './api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RESET } from './reducer';
const loginProfessionalThunk = createAsyncThunk(
    'professional/login',
    async (payload, {rejectWithValue}) => {
        try {
            const result = await loginProfessional(payload, {'Content-Type' : 'application/json'});
            return result;
        } catch(err) {
            rejectWithValue('clave o usuario incorrecto', err);
        }
    }
)

const logoutProfessionalThunk = createAsyncThunk(
    'professinal/logout',
    async (_payload, {rejectWithValue, getState, dispatch }) => {
        try {
            const { login: {token} } = getState();
            await logoutProfessional({}, {'X-Session-Token' : token});
            dispatch(RESET());

        } catch(e) {
            rejectWithValue(e);
        }
    }
)
export {
    loginProfessionalThunk,
    logoutProfessionalThunk
}