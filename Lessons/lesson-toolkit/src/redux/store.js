import { configureStore } from "@reduxjs/toolkit";
import imgaeSlice from "./imgaeSlice";

const store = configureStore({
    reducer: {
        image: imgaeSlice
    }
});

export default store;