import { configureStore } from '@reduxjs/toolkit';
import hitCheckReducer from './hitCheckSlice';
import radiusReducer from './radiusSlice';
import errorMessageReducer from './errorMessageSlice';

export const store = configureStore({
    reducer: {
        hitChecks: hitCheckReducer,
        radius: radiusReducer,
        errorMessage: errorMessageReducer
    },
});
