import initialState from "./initialState";
import { CLICK } from "./action";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK:
            return {
                ...state,
                click: state.click + 1
            };
        default:
            return state;
    }
};

export default reducer;