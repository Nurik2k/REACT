import { configureStore } from "@reduxjs/toolkit";
import imgaeSlice from "./imgaeSlice";
import circleSlice from "./circleSlice";

const store = configureStore({
    reducer: {
        image: imgaeSlice,
        circle: circleSlice, 
    }
});

export default store;