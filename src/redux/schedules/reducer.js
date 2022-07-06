import { createSlice } from "@reduxjs/toolkit";
import initialState from "./state";

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers : {
        RESET: () => initialState
    }
})


