import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
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
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList','tabCreate')
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => throwError(error))
            })
    }
}

export function update(billing) {
    axios.put(`${URL}/${billing._id}`, billing)
        .then(resp => {
            throwSuccess()
        })
        .catch(e => {
            e.response.data.errors.forEach(error => throwError(error))
        })
    console.log(billing)
}

function throwError(error) {
    toastr.error('Error', error)
}

function throwSuccess(msg = 'Successful Operation!') {
    toastr.success('Success', msg)
}