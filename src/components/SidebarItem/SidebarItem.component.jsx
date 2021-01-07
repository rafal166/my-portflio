import React from 'react';
import { withRouter } from 'react-router';

import {
    SidebarItemStyled,
    SidebarItemLinkStyled,
    SidebarItemIconStyled,
    SidebarItemTextStyled,
} from './SidebarItem.styles';

function SidebarItem({
    children,
    icon,
    align,
    last,
    location,
    targetLocation,
    ...otherProps
}) {
    console.log(location);
    console.log(targetLocation);
    return (
        <SidebarItemStyled
            active={location.pathname === targetLocation}
            {...otherProps}
            last={last}>
            <SidebarItemLinkStyled align={align}>
                <SidebarItemIconStyled icon={icon}></SidebarItemIconStyled>
                <SidebarItemTextStyled>{children}</SidebarItemTextStyled>
            </SidebarItemLinkStyled>
        </SidebarItemStyled>
    );
}

export default withRouter(SidebarItem);
