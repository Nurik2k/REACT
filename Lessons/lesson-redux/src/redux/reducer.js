// import { SET_IMAGE } from "./actions";

import { SET_USER } from "./actions"

// const initialState = {
//     image: ''
// }

// const imageReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_IMAGE:
//             return { ...state, image: action.payload };
//         default:
//             return state;
//     }
// }

// export default imageReducer;

const initialState = {
    users: [{
        name: '',
        surname: '',
        age: 0
    }]
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER:
            return {...state, users:[...state.users, action.payload]};
        default:
            return state;
    }
}

export default userReducer;