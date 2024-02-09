import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image: ''
}

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
        }
    }
});

// Эксопрт редьюсера для использвания в компонентах (ations)
export const { setImage } = imageSlice.actions;

// Экспорт редьюсера для хранилища
export default imageSlice.reducer;