import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const URL = 'http://localhost:3003/api/billingCycles'

export function getList() {
    const request = axios.get(`${URL}/?sort=-month`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return (dispatch) => {
        axios.post(URL, values)
            .then(resp => {
                throwSuccess()
                redirectToList(dispatch)
            })
            .catch(e => {
                e.response.data.errors.forEach(error => throwError(error))
            })
    }
}

export function update(billing) {
    return (dispatch) => {
        axios.put(`${URL}/${billing._id}`, billing)
            .then(resp => {
                throwSuccess()
                redirectToList(dispatch)
            })
            .catch(e => {
                e.response.data.errors.forEach(error => throwError(error))
            })
    }
}

export function showUpdate(billing) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billing)
    ]
}

export function deleteBillingCycle(billing) {
    return {
        type: 'DELETED_BILLING_CYCLE'
    }
}

function throwError(error) {
    toastr.error('Error', error)
}

function throwSuccess(msg = 'Successful Operation!') {
    toastr.success('Success', msg)
}

function redirectToList(dispatch) {
    dispatch([
        resetForm('billingCycleForm'),
        getList(),
        selectTab('tabList'),
        showTabs('tabList','tabCreate')
    ])
}