import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uid: '',
    name: '',
    email: '',
    phone: '',
    profileImage: '',
    type: 'external'
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.profileImage = action.payload.profileImage;
        },
        updateType: (state, action) => {
            state.type = action.payload;
        },
        resetUser: (state) => {
            state.name = initialState.name;
            state.email = initialState.email;
            state.phone = initialState.phone;
            state.profileImage = initialState.profileImage;
            state.type = initialState.type;
        }
    }
});

export const { updateUser, updateType, resetUser } = userSlice.actions;
export default userSlice.reducer;
