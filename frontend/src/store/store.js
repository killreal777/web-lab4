import { configureStore } from '@reduxjs/toolkit';
import hitCheckReducer from './hitCheckSlice';
import radiusReducer from './radiusSlice';

export const store = configureStore({
    reducer: {
        hitChecks: hitCheckReducer,
        radius: radiusReducer
    },
});
