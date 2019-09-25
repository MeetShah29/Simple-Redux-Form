import { FORM } from '../constants'

const initialState = {
    data: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM.DATA:
            return {
                ...state,
                data: action.data
            }
            default:
                return state;
    }
}
export default rootReducer;
