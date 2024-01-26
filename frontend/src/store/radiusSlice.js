import { createSlice } from "@reduxjs/toolkit";

const radiusSlice = createSlice({
    name: "radius",
    initialState: {
        value: 1,
    },
    reducers: {
        setRadius: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { setRadius } = radiusSlice.actions;

export default radiusSlice.reducer;