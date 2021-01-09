import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar.component';
import SidebarItem from '../SidebarItem/SidebarItem.component';
import GlobalRoute from '../../config/Global.route';

import Settings from '../../pages/Settings/Settings.page';

export default function SidebarContainer() {
    return (
        <Sidebar>
            <SidebarItem
                as={Link}
                to={GlobalRoute.getRoute('about_me')}
                icon='user'>
                About Me
            </SidebarItem>
            <SidebarItem
                as={Link}
                to={GlobalRoute.getRoute('projects')}
                icon='briefcase'>
                My projects
            </SidebarItem>
            <SidebarItem
                as={Link}
                to={GlobalRoute.getRoute('lab')}
                icon='flask'>
                My Lab
            </SidebarItem>
            <SidebarItem
                as={Link}
                to={GlobalRoute.getRoute('contact')}
                icon='comments'>
                Say hello
            </SidebarItem>
            <SidebarItem style={{ marginTop: 'auto' }} icon='cog' as={Settings}>
                Settings
            </SidebarItem>
        </Sidebar>
    );
}
