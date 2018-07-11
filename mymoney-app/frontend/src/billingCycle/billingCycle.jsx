import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab, showTabs } from '../common/tab/tabActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

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
                            <TabContent id='tabList'><h1>List</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Create</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Update</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Delete</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList','tabCreate')
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectTab, showTabs }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)