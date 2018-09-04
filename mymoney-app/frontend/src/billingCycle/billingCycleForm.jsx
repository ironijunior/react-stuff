import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from '../billingCycle/billingCycleActions'

import LabelAndInput from '../common/form/labelAndInput';
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {
    
    render() {
        const { handleSubmit, submitName, readOnly, credits, debits } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} 
                        readOnly={readOnly}
                        label='Name' placeholder='Billing cycle name' cols='12 4' />

                    <Field name='month' component={LabelAndInput} type='number' 
                        readOnly={readOnly}
                        label='Month' placeholder='Billing cycle month' cols='12 4'  />

                    <Field name='year' component={LabelAndInput} type='number'
                         readOnly={readOnly}
                         label='Year' placeholder='Billing cycle year' cols='12 4' />
                    
                    <Summary credit={1000} debt={100} />

                    <ItemList field='credits' legend='Credits' cols='12 6' 
                        readOnly={readOnly} list={credits} />

                    <ItemList field='debits' legend='Debts' cols='12 6' 
                        readOnly={readOnly} list={debits} showStatus={true} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>{submitName}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>
                        Cancel
                    </button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = (state) => ({ 
    credits: selector(state, 'credits'), 
    debits: selector(state, 'debits') 
})
const mapDispatchToProps = (dispatch) => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)