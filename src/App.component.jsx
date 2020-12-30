import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './App.styles';

// pages
import Homepage from './pages/Homepage/Homepage.component';
import Components from './pages/Components/Components.component';

// modules
import NavbarContainer from './components/Navbar/Navbar.container';
import SidebarContainer from './components/Sidebar/SidebarContainer.component';

function App() {
    return (
        <div>
            <GlobalStyles></GlobalStyles>
            <NavbarContainer></NavbarContainer>
            <SidebarContainer></SidebarContainer>
            <main>
                <Switch>
                    <Route exact path='/' component={Homepage}></Route>
                    <Route path='/components' component={Components}></Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
