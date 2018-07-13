import { combineReducers } from 'redux'

import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer