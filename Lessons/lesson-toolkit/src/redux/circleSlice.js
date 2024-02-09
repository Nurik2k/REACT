import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pos: {
        x: 0,
        y: 0,
    }
}

const circleSlice = createSlice({
    name: 'circle',
    initialState,
    reducers: {
        setCircle: (state, action) => {
            state.pos = action.payload;
        }
    }
});

// Эксопрт редьюсера для использвания в компонентах (ations)
export const { setCircle } = circleSlice.actions;

// Экспорт редьюсера для хранилища
export default circleSlice.reducer;