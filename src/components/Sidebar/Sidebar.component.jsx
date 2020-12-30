import React from 'react';

import { SidebarStyled, SidebarItemListStyled } from './Sidebar.styles';

export default function Sidebar({ children }) {
    return (
        <SidebarStyled>
            <SidebarItemListStyled numChildren={children.length}>
                {children}
            </SidebarItemListStyled>
        </SidebarStyled>
    );
}
