import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar.component';
import SidebarItem from '../SidebarItem/SidebarItem.component';
import GlobalRoute from '../../config/Global.route';

import Settings from '../../pages/Settings/Settings.page';

export default function SidebarContainer() {
    return (
        <Sidebar>
            <Link to={GlobalRoute.getRoute('about_me')}>
                <SidebarItem
                    targetLocation={GlobalRoute.getRoute('about_me')}
                    icon='user'>
                    About Me
                </SidebarItem>
            </Link>
            <Link to={GlobalRoute.getRoute('projects')}>
                <SidebarItem
                    targetLocation={GlobalRoute.getRoute('projects')}
                    icon='briefcase'>
                    My projects
                </SidebarItem>
            </Link>
            <Link to={GlobalRoute.getRoute('contact')}>
                <SidebarItem
                    targetLocation={GlobalRoute.getRoute('contact')}
                    icon='comments'>
                    Say hello
                </SidebarItem>
            </Link>
            <Settings>
                <SidebarItem last={true} icon='cog'>
                    Settings
                </SidebarItem>
            </Settings>
        </Sidebar>
    );
}
