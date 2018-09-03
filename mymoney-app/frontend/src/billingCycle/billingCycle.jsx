import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init, create, update, remove } from '../billingCycle/billingCycleActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import BillingCycleList from './billingCycleList';
import BillingCycleForm from './billingCycleForm';

const BillingCycle = class BillingCycle extends Component {

    render() {
        return (
            <div>
                <ContentHeader title='Billing Cycle' subtitle='Registration' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='List' icon='bars' target='tabList' />
                            <TabHeader label='Add' icon='plus' target='tabCreate' />
                            <TabHeader label='Edit' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Delete' icon='trash' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <BillingCycleForm 
                                    onSubmit={this.props.create}
                                    submitName='Create' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <BillingCycleForm 
                                    onSubmit={this.props.update}
                                    submitName='Update' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <BillingCycleForm 
                                    onSubmit={this.props.remove} 
                                    readOnly={true}
                                    submitName='Delete' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }

    componentWillMount() {
        this.props.init()
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ 
    create, update , remove, init
}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)