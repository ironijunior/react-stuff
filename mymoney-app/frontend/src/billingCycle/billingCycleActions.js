import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const URL = 'http://localhost:3003/api/billingCycles'

const INITIAL_VALUES = {
    credits: [{}],
    debits: [{}]
}

export function init() {
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

export function getList() {
    const request = axios.get(`${URL}/?sort=-month`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(billing) {
    return submit(billing, 'put')
}

export function remove(billing) {
    return submit(billing, 'delete')
}

export function showUpdate(billing) {
    return showTab(billing, 'tabUpdate')
}

export function showDelete(billing) {
    return showTab(billing, 'tabDelete')
}

function showTab(values, tabId) {
    return [
        showTabs(tabId),
        selectTab(tabId),
        initialize('billingCycleForm', values)
    ]
}

function submit(values, method) {
    return (dispatch) => {
        const id = values._id ? values._id : ''
        
        axios[method](`${URL}/${id}`, values)
            .then(resp => {
                throwSuccess()
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => throwError(error))
            })
    }
}

function throwError(error) {
    toastr.error('Error', error)
}

function throwSuccess(msg = 'Successful Operation!') {
    toastr.success('Success', msg)
}