import React, { useState } from 'react';

import { SidebarStyled, ListStyled, Toggler } from './Sidebar.styles';

function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(false);
    // eslint-disable-next-line
    const [expandOnHover, setExpandOnHover] = useState(true);

    return (
        <SidebarStyled expand={expanded} expandOnHover={expandOnHover}>
            <ListStyled
                expand={expanded}
                expandOnHover={expandOnHover}
                numChildren={children.length}>
                <Toggler
                    expand={expanded}
                    align='right'
                    onClick={() =>
                        setExpanded(expandOnHover ? false : !expanded)
                    }
                    icon='chevron-right'></Toggler>
                {children}
            </ListStyled>
        </SidebarStyled>
    );
}

export default Sidebar;
