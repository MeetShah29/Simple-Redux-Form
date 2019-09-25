import { createStore } from 'redux';
import rootReducer from '../reducer'

const configureStore = () => {
    const initialState = {}
    const store = createStore(
        rootReducer,
        initialState,
    )

    return store

}

export default configureStore