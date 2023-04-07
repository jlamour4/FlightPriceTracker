import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        update: (state, action) => {
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
        },
        reset: (state) => {
            state.firstname = initialState.firstname;
            state.lastname = initialState.lastname;
            state.email = initialState.email;
            state.phone = initialState.phone;
        }
    }
});

export const { update, reset } = userSlice.actions;
export default userSlice.reducer;
