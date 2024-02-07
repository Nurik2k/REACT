//Типы action
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Создаем actions
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})