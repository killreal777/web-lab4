import { createSlice } from "@reduxjs/toolkit";

const errorMessageSlice = createSlice({
    name: "errorMessage",
    initialState: {
        value: "_________________",
    },
    reducers: {
        setErrorMessage: (state, action) => {
            state.value = action.payload;
        },
        cleanErrorMessage: (state) => {
            state.value -= "_________________";
        }
    },
})

export const { setErrorMessage, cleanErrorMessage } = errorMessageSlice.actions;

export default errorMessageSlice.reducer;