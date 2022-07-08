import { createAsyncThunk } from '@reduxjs/toolkit';
import {createUser, createProfessional } from './api';

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
                }
            } = getState();
            const { password, username, speciality } = payload;
            const body = {
                password,
                username,
                id_user : user.id,
                id_speciality:  Number(speciality),
                linkToConsultation: "http://linkToCall.url"
            }
            const res = await createProfessional(body, {'Content-Type' : 'application/json'});
            return res; 
        } catch(err) {
            return rejectWithValue([], err);
        }
    }
)


export  {
    createUserThunk,
    createProfesionalThunk,
};