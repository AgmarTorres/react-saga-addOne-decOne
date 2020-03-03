import {combineReducers } from 'redux'
import buttomReducer from './buttom/button.reducer'

const rootReducer= combineReducers({
    result: buttomReducer
})

export default rootReducer