import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../FontAwesomeIcons';

import Navbar from './Navbar.component';
import NavItem from './NavItem.component';
import NavItemDropdown from './NavItemDropdown.component';

function NavbarContainer() {
    return (
        <Navbar>
            <NavItem icon={<FontAwesomeIcon icon='plus' />} />
            <NavItem icon={<FontAwesomeIcon icon='bell' />} />
            <NavItem icon={<FontAwesomeIcon icon='chevron-down' />}>
                <NavItemDropdown
                    options={[
                        {
                            leftIconName: 'user',
                            text: 'My Profile',
                            linkTo: '/',
                        },
                        {
                            leftIconName: ['fab', 'react'],
                            rightIconName: 'chevron-right',
                            text: 'Components',
                            goToMenu: 'components',
                            submenu: {
                                options: [
                                    {
                                        leftIconName: 'chevron-left',
                                        text: 'Components',
                                        backToMain: true,
                                    },
                                    {
                                        leftIconName: ['fas', 'square'],
                                        text: 'Text Input',
                                        linkTo: '/components/text-input',
                                    },
                                    {
                                        leftIconName: ['fas', 'square'],
                                        text: 'Button',
                                        linkTo: '/components/button',
                                    },
                                ],
                            },
                        },
                    ]}></NavItemDropdown>
            </NavItem>
        </Navbar>
    );
}

export default NavbarContainer;
