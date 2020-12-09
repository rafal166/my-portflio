import React from "react";
import "./components/FontAwesomeIcons";
import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/Navbar/NavItem";
import DropdownMenu from "./components/Navbar/DropdownMenu";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <Navbar>
      <NavItem icon={<FontAwesomeIcon icon="plus" />} />
      <NavItem icon={<FontAwesomeIcon icon="bell" />} />
      <NavItem icon={<FontAwesomeIcon icon="chevron-down" />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

export default App;
