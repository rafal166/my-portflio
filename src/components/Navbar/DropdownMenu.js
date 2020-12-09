import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeigh(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        <span className="dropdown-item-text">{props.children}</span>
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeigh}
      >
        <div className="menu">
          <DropdownItem
          leftIcon={<FontAwesomeIcon icon="user"></FontAwesomeIcon>}
          >My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon="cog"></FontAwesomeIcon>}
            rightIcon={<FontAwesomeIcon icon="chevron-right"></FontAwesomeIcon>}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeigh}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon="chevron-left"></FontAwesomeIcon>}
            goToMenu="main"
          >
            Settings
          </DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
