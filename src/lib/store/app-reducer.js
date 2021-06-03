import { combineReducers } from 'redux'
import vaccineReducer from "./Vaccines/reducer";

const appReducer = combineReducers({
    vaccineDetails: vaccineReducer
})

export default appReducer