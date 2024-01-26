import { createSlice } from "@reduxjs/toolkit";

const radiusSlice = createSlice({
    name: "radius",
    initialState: {
        data: 1,
    },
    reducers: {
        setRadius(state, action) {
            state.data = action.payload.data;
        }
    },
})

export const { setRadius } = radiusSlice.actions;

export default radiusSlice.reducer;