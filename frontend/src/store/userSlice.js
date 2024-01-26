import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            login: null,
            password: null
        }
    },
    reducers: {
        setLogin: (state, action) => {
            state.value.login = action.payload
        },
        setPassword: (state, action) => {
            state.value.password = action.payload
        }
    },
})

export const { setLogin, setPassword } = userSlice.actions;

export default userSlice.reducer;