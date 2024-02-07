//Типы action
export const SET_IMAGE = 'SET_IMAGE';

// Создаем actions
export const setImage = (image_url) => ({
    type: SET_IMAGE,
    payload: image_url
})