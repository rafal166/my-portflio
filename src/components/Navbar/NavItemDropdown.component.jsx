import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';

function NavItemDropdown({ options }) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeigh(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function NavItemDropdownItem(props) {
        return (
            // eslint-disable-next-line
            <a
                href='#'
                className='menu-item'
                onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='icon-button'>{props.leftIcon}</span>
                <span className='dropdown-item-text'>{props.children}</span>
                <span className='icon-right'>{props.rightIcon}</span>
            </a>
        );
    }

    function getNavItemDropdownItem({
        leftIconName,
        rightIconName,
        text,
        backToMain,
        goToMenu,
    }) {
        let params = {};
        if (goToMenu) params.goToMenu = goToMenu;
        else if (backToMain) params.goToMenu = 'main';

        return (
            <NavItemDropdownItem
                leftIcon={
                    <FontAwesomeIcon icon={leftIconName}></FontAwesomeIcon>
                }
                rightIcon={
                    <FontAwesomeIcon icon={rightIconName}></FontAwesomeIcon>
                }
                {...params}>
                {text}
            </NavItemDropdownItem>
        );
    }

    return (
        <div className='dropdown' style={{ height: menuHeight }}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames='menu-primary'
                onEnter={calcHeigh}>
                <div className='menu'>
                    {options.map((option) =>
                        option.linkTo ? (
                            <Link to={option.linkTo}>
                                {getNavItemDropdownItem(option)}
                            </Link>
                        ) : (
                            getNavItemDropdownItem(option)
                        )
                    )}
                </div>
            </CSSTransition>

            {options.map(({ submenu, goToMenu }) =>
                submenu ? (
                    <CSSTransition
                        in={activeMenu === goToMenu}
                        unmountOnExit
                        timeout={500}
                        classNames='menu-secondary'
                        onEnter={calcHeigh}>
                        <div className='menu'>
                            {submenu.options.map((option) =>
                                option.goToMenu ? (
                                    getNavItemDropdownItem(option)
                                ) : (
                                    <Link to={option.linkTo}>
                                        {getNavItemDropdownItem(option)}
                                    </Link>
                                )
                            )}
                        </div>
                    </CSSTransition>
                ) : null
            )}
        </div>
    );
}

export default NavItemDropdown;
