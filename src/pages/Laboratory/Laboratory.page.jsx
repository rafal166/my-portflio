import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TextInputPage from './TextInputPage/TextInputPage.component';
import ButtonPage from './ButtonPage/ButtonPage.component';

export default function Laboratory({ match }) {
    return (
        <Switch>
            <Route
                exact
                path={`${match.path}`}
                render={(props) => <h1>Laboratory page</h1>}></Route>
            <Route
                exact
                path={`${match.path}/text-input`}
                component={TextInputPage}></Route>
            <Route
                exact
                path={`${match.path}/button`}
                component={ButtonPage}></Route>
        </Switch>
    );
}
