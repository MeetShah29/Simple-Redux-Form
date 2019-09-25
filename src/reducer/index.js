import {combineReducers} from 'redux'
import{reducer as formreducer} from 'redux-form'
import rootReducer from './rootReducer'

export default combineReducers({
    form:formreducer,
    isData:rootReducer
})