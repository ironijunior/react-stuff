import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import labelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends Component {
    
    render() {
        const { handleSubmit } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput}
                        label='Name' placeholder='Billing cycle name' cols='12 4' />

                    <Field name='month' component={labelAndInput} type='number'
                        label='Month' placeholder='Billing cycle month' cols='12 4'  />

                    <Field name='year' component={labelAndInput} type='number'
                        label='Year' placeholder='Billing cycle year' cols='12 4' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)