/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState } from 'react';

function NavItem(props) {
    const [open, setOpen] = useState(false);
    // eslint-disable-next-line
    return (
        <li className='nav-item'>
            <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

export default NavItem;
