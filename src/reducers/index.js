import { combineReducers } from 'redux'
import TODOActions from './TODOActions'

const rootReducer = combineReducers({
    items: TODOActions
})

export default rootReducer