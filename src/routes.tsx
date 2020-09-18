import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import CharactersPage from './pages/CharactersPage';
import EpisodePage from './pages/EpisodePage';
import SpecificCharacterPage from './pages/SpecificCharacterPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/randomcharacter" />
                <Route path="/randomcharacter" component={CharactersPage} />
                <Route path="/episode/:id" component={EpisodePage} />
                <Route path="/character/:id" component={SpecificCharacterPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;