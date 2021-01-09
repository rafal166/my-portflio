import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import '../FontAwesomeIcons';

//styles
import { GlobalStyles } from './App.styles';
import globalTheme from '../config/globalTheme';
import GlobalRoute from '../config/Global.route';

// pages
import AboutMe from '../pages/AboutMe/AboutMe.page';
import Projects from '../pages/Projects/Projects.page';
import Laboratory from '../pages/Laboratory/Laboratory.page';
import Contact from '../pages/Contact/Contact.page';

// modules
import SidebarContainer from '../components/Sidebar/SidebarContainer.component';
import SocialContainer from '../components/SocialContainer/SocialContainer.component';

function App() {
    return (
        <ThemeProvider theme={globalTheme}>
            <GlobalStyles></GlobalStyles>
            <SidebarContainer></SidebarContainer>
            <SocialContainer></SocialContainer>
            <main>
                <Switch>
                    <Route
                        exact
                        path={GlobalRoute.getRoute('about_me')}
                        component={AboutMe}></Route>
                    <Route
                        exact
                        path={GlobalRoute.getRoute('projects')}
                        component={Projects}></Route>
                    <Route
                        exact
                        path={GlobalRoute.getRoute('contact')}
                        component={Contact}></Route>
                    <Route
                        exact
                        path={GlobalRoute.getRoute('lab')}
                        component={Laboratory}></Route>
                </Switch>
            </main>
        </ThemeProvider>
    );
}

export default App;
