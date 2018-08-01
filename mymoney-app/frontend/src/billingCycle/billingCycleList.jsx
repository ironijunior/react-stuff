import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, deleteBillingCycle } from '../billingCycle/billingCycleActions'
import IconButton from '../common/template/iconButton';

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <IconButton style='warning' icon='pencil' 
                        onClick={() => this.props.showUpdate(bc)} />
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => this.props.deleteBillingCycle(bc)} />
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

}

const mapStateToProps = (state) => ({ list: state.billingCycle.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({ 
    getList, showUpdate, deleteBillingCycle }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)