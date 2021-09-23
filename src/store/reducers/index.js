import { ADD_PRODUCT, REMOVE_PRODUCT } from '../constants/action-types';

const initialState = {
    products: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_PRODUCT) {
        if (!state.products.some((item) => item.id === action.payload.id)) {
            return { ...state, products: state.products.concat(action.payload) };
        }
        return state;
    } if (action.type === REMOVE_PRODUCT) {
        return { ...state, products: state.products.filter((item) => action.payload.id !== item.id) };
    }
    return state;
}

export default rootReducer;
