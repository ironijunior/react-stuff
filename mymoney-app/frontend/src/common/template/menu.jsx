import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem label='Dashboard' path='/' icon='dashboard' />
        
        <MenuTree label='Registration' icon='edit'>
            <MenuItem label='Billing Cycles' path='billingCycles' icon='usd' />
        </MenuTree>
    </ul>
)