import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CharactersPage from './pages/CharactersPage';
import EpisodePage from './pages/EpisodePage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={CharactersPage} />
                <Route path="/episode/:id" component={EpisodePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;