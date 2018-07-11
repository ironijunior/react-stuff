import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Row from '../common/layout/row'

const BillingCycle = class BillingCycle extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ContentHeader title='Billing Cycle' subtitle='Small descr' />
                <Content>
                    <Row>
                        Content
                    </Row>
                </Content>
            </div>
        )
    }

}

export default BillingCycle