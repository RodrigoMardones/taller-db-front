import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import { createUserThunk } from './thunk';

const professional = createSlice({
    name: 'professinal',
    initialState : initialState,
    reducers: {
        RESET: () => initialState,
      },
    extraReducers : {
        [createUserThunk.fulfilled] : (state, {payload}) => {
            state.user = {...state.user, ...payload};
            state.user.loding = false;
            state.user.loaded = true;
            state.error = null;
            state.user.goTo = '/profesional/termino-datos'
        },
        [createUserThunk.pending] : (state,{payload}) => {
            state.user.loading = true;
            state.user.loaded = false;
            state.error = null;
        },
        [createUserThunk.rejected]: (state,{error}) => {
            state.error = error;
            state.user.loding = false;
            state.user.loaded = false;
            state.user.goTo = '/'
        },
    }
});
const { RESET } =  professional.actions;
const selectToken = (state) => state.professional.token;
const selectProfessional = (state) => state.professional;

export { createUserThunk, RESET, selectToken, selectProfessional };
export default professional.reducer;