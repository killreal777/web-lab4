import { configureStore } from '@reduxjs/toolkit';
import hitCheckReducer from './hitCheckSlice';
import radiusReducer from './radiusSlice';
import areaDotReducer from './areaDotSlice';
import errorMessageReducer from './errorMessageSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        hitChecks: hitCheckReducer,
        radius: radiusReducer,
        areaDot: areaDotReducer,
        errorMessage: errorMessageReducer,
        user: userReducer
    },
});
