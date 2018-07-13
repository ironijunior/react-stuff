import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList } from '../billingCycle/billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        
        return list.map(it => (
            <tr key={it._id}>
                <td>{it.name}</td>
                <td>{it.month}</td>
                <td>{it.year}</td>
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
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)