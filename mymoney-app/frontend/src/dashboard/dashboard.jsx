import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

const Dashboard = class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0 }
    }

    render() {
        const {credit, debt} = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='Version 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={credit} text='Credits' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={debt} text='Debts' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={credit - debt} text='Consolidated' />
                    </Row>
                </Content>
            </div>
        )
    }

    componentWillMount() {
        const URL = 'http://localhost:3003/api/billingCycles'
        axios.get(`${URL}/summary`)
            .then(resp => {
                this.setState({ 
                    ...this.state, 
                    credit: resp.data.credit, 
                    debt: resp.data.debt 
                })
            })
    }

}

export default Dashboard