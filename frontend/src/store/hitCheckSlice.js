import { createSlice } from "@reduxjs/toolkit";

const hitCheckSlice = createSlice({
    name: "hitChecks",
    initialState: {
        data: [],
    },
    reducers: {
        setData(state, action) {
            state.data = action.payload.data;
        },
        deleteData(state) {
            state.data = [];
        }
    },
})

export const { setData, deleteData } = hitCheckSlice.actions;

export default hitCheckSlice.reducer;