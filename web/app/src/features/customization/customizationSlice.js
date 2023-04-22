import { createSlice } from '@reduxjs/toolkit';

import config from 'config';

const initialState = {
    isOpen: [], // for active default menu
    defaultId: 'default',
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true
};

export const customizationSlice = createSlice({
    name: 'customization',
    initialState,
    reducers: {
        menuOpen: (state, action) => {
            state.isOpen = [action.payload];
        },
        setMenu: (state, action) => {
            state.opened = action.payload;
        },
        setFontFamiliy: (state, action) => {
            state.fontFamily = action.payload;
        },
        setBorderRadius: (state, action) => {
            state.borderRadius = action.payload;
        }
    }
});

export const { menuOpen, setMenu, setFontFamiliy, setBorderRadius } = customizationSlice.actions;
export default customizationSlice.reducer;
