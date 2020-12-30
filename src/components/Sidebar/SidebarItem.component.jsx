import React from 'react';

import {
    SidebarItemStyled,
    SidebarItemLinkStyled,
    SidebarItemIconStyled,
    SidebarItemTextStyled,
} from './SidebarItem.styles';

export default function SidebarItem({ children, icon }) {
    return (
        <SidebarItemStyled>
            <SidebarItemLinkStyled>
                <SidebarItemIconStyled icon={icon}></SidebarItemIconStyled>
                <SidebarItemTextStyled>{children}</SidebarItemTextStyled>
            </SidebarItemLinkStyled>
        </SidebarItemStyled>
    );
}
