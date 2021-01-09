import React from 'react';
import { withRouter } from 'react-router';

import {
    SidebarItemStyled,
    SidebarItemLinkStyled,
    SidebarItemIconStyled,
    SidebarItemTextStyled,
} from './SidebarItem.styles';

function SidebarItem({ children, icon, align, location, ...otherProps }) {
    return (
        <SidebarItemStyled
            active={location.pathname === otherProps.to}
            {...otherProps}>
            <SidebarItemLinkStyled align={align}>
                <SidebarItemIconStyled icon={icon}></SidebarItemIconStyled>
                <SidebarItemTextStyled>{children}</SidebarItemTextStyled>
            </SidebarItemLinkStyled>
        </SidebarItemStyled>
    );
}

export default withRouter(SidebarItem);
