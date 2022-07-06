import { createAsyncThunk } from '@reduxjs/toolkit';
import {createUser } from './api';

const createUserThunk = createAsyncThunk(
    'professional/createUser',
    async (payload, {rejectWithValue, ..._rest}) => {
        try {
            const created = await createUser(payload);
            return created;
        } catch(err) {
            return rejectWithValue([], err);
        }
    }
)
const createProfesionalThunk = createAsyncThunk(
    'professional/createProfessional',
    async (payload, {rejectWithValue, getState }) => {
        try {
            const {
                professional : {
                    user,
                    professional,
                }
            } = getState();
            console.log(user);
            console.log(professional);
            console.log(payload);
        } catch(err) {
            return rejectWithValue([], err);
        }
    }
)


export  {
    createUserThunk,
    createProfesionalThunk,
};