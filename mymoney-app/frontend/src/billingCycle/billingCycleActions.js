import axios from 'axios'
import { toastr } from 'react-redux-toastr'
const URL = 'http://localhost:3003/api/billingCycles'

export function getList() {
    const request = axios.get(`${URL}/?sort=-month`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    axios.post(URL, values)
        .then(resp => {
            toastr.success('Success', 'Successful Operation!')
        })
        .catch(e => {
            e.response.data.errors.forEach(
                error => toastr.error('Error', error))
        })

    return {
        type: 'TEMP'
    }
}

export function update(values) {
    console.log(values)
}