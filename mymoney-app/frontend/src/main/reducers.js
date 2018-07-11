import { combineReducers } from 'redux'

import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    tab: TabReducer
})

export default rootReducer