import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import IconButton from '../common/template/iconButton'
import If from '../common/template/if'

class ItemList extends Component {

    add(index, item = {}) {
        if(!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }

    remove(index) {
        if(!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        const { field } = this.props

        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${field}[${index}].name`}component={Input}
                    placeholder='Fill the name' readOnly={this.props.readOnly} /></td>
                <td><Field name={`${field}[${index}].value`} component={Input}
                    placeholder='Fill the value' readOnly={this.props.readOnly} /></td>
                <If test={this.props.showStatus}>
                    <td><Field name={`${field}[${index}].status`}component={Input}
                        placeholder='Fill the status' readOnly={this.props.readOnly} /></td>
                </If>
                <td>
                    <IconButton style='success' icon='plus' type='button'
                        onClick={ () => this.add(index + 1) } />
                    <IconButton style='warning' icon='clone' type='button'
                        onClick={ () => this.add(index + 1, item) } />
                    <IconButton style='danger' icon='trash-o' type='button'
                        onClick={ () => this.remove(index) } />
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className='tableActionsList'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }

}

const mapStateToProps = (state) => ({ ...state })
const mapDispatchToProps = (dispatch) => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
