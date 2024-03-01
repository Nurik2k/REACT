import { configureStore } from "@reduxjs/toolkit";
import moneySlice from "./moneySlice";

const store = configureStore({
    reducer: {
        money: moneySlice
    }
});

export default store;