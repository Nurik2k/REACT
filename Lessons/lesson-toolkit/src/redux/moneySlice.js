import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     incomes: []
// }

const moneySlice = createSlice({
    name: 'money',
    initialState: {
        incomes: []
    },
    reducers: {
        /**
         * Добавляем доход
         * @param action.payload - {money}
         */
        addIncome: (state, action) => {
            state.incomes.push(action.payload);
        }
    }

});

export const { addIncome } = moneySlice.actions;
export default moneySlice.reducer;