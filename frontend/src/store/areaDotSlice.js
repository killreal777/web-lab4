import { createSlice } from "@reduxjs/toolkit";

const areaDotSlice = createSlice({
    name: "areaDot",
    initialState: {
        value: {
            r: 1,
            x: 0,
            y: 0
        }
    },
    reducers: {
        setR: (state, action) => {
            state.value.r = action.payload
        },
        setX: (state, action) => {
            state.value.x = action.payload
        },
        setY: (state, action) => {
            state.value.y = action.payload
        }
    },
})

export const { setR, setX, setY } = areaDotSlice.actions;

export default areaDotSlice.reducer;