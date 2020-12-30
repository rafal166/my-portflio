import React from 'react';

import Sidebar from './Sidebar.component';
import SidebarItem from './SidebarItem.component';

export default function SidebarContainer() {
    return (
        <Sidebar>
            <SidebarItem icon='cog'>Hej</SidebarItem>
            <SidebarItem icon='cog'>Hej2</SidebarItem>
            <SidebarItem icon={['fab', 'react']}>Hej4</SidebarItem>
        </Sidebar>
    );
}
