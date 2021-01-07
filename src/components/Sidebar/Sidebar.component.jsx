import React, { useState } from 'react';

import {
    SidebarStyled,
    SidebarItemListStyled,
    SidebarToggler,
} from './Sidebar.styles';

function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <SidebarStyled expand={expanded}>
            <SidebarItemListStyled
                expand={expanded}
                numChildren={children.length}>
                <SidebarToggler
                    expand={expanded}
                    align='right'
                    onClick={() => setExpanded(!expanded)}
                    icon='chevron-right'></SidebarToggler>
                {children}
            </SidebarItemListStyled>
        </SidebarStyled>
    );
}

export default Sidebar;
