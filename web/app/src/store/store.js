import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import customizationReducer from '../features/customization/customizationSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        customization: customizationReducer
    }
});
