import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import createUser from './thunk';

const professional = createSlice({
    name: 'professinal',
    initialState : initialState,
    extraReducers : {
        [createUser.fulfilled] : (state, {payload}) => {
            state.user = payload;
            state.loding = false;
            state.loaded = true;
            state.error = null;
            state.goTo = '/profesional/termino-datos'
        },
        [createUser.pending] : (state,{payload}) => {
            state.loading = true;
            state.loaded = false;
            state.error = null;
        },
        [createUser.rejected]: (state,{error}) => {
            state.error = error;
            state.loding = false;
            state.loaded = false;
            state.goTo = '/'
            state.queryError = {
             message : 'Ops! hemos tenido un inconveniente creando a tu usuario',
            }
        } 
    }
});

export { createUser };
export const selectToken = (state) => state.professional.token;
// selecciona del estado global de la app a profesional
export const selectProfessional = (state) => state.professional;
export default professional.reducer;