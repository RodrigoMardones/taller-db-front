import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import {loginProfessionalThunk, logoutProfessionalThunk} from './thunk';

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers : {
        RESET: () => initialState,
    },
    extraReducers :  {
        [loginProfessionalThunk.fulfilled] : (state, {payload}) => {
            state.token = payload.token ? payload.token : '';
            state.loading = false;
            state.loaded = payload.token ? false: true;
            state.id_professional = payload.key? payload.key : '';
        },   
        [loginProfessionalThunk.pending] : (state, {payload}) => {
            state.loading = true;
            state.loaded = false;    
        },
        [loginProfessionalThunk.rejected] : (state, {error}) => {
            state.loading = false;
            state.loaded = false;
            state.token = error;
        },
        [logoutProfessionalThunk.fulfilled] : (state) => {
        },
        [logoutProfessionalThunk.pending] : (state) => {
        },
        [logoutProfessionalThunk.rejected] : (state) => {
        }
    }
})

const { RESET } = loginSlice.actions;
const selectLogin = (state) => state.login;
export { RESET, selectLogin, loginProfessionalThunk, logoutProfessionalThunk };
export default loginSlice.reducer;