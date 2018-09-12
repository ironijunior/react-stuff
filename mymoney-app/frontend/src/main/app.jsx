import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

export default props => (
    <div className='wrapper'>
        <Messages />
        
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer />
    </div>
)