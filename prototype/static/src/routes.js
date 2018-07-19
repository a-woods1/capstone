/* eslint new-cap: 0 */

import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from './containers/App';
import { HomeContainer } from './containers/HomeContainer';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import ProtectedView from './components/ProtectedView';
import Accommodations from './components/Accommodations';
import Requests from './components/Requests';
import Account from './components/Account';
import Arrival from './components/Arrival';
import NotFound from './components/NotFound';

import { DetermineAuth } from './components/DetermineAuth';
import { requireAuthentication } from './components/AuthenticatedComponent';
import { requireNoAuthentication } from './components/notAuthenticatedComponent';

export default (
    <Route path="/" component={App}>
        <Route path="protected" component={requireNoAuthentication(ProtectedView)} />
        <Route path="login" component={requireNoAuthentication(LoginView)} />
        <Route path="register" component={requireNoAuthentication(RegisterView)} />
        <Route path="home" component={requireNoAuthentication(HomeContainer)} />
        <Route path="accommodations" component={requireAuthentication(Accommodations)} />
        <Route path="requests" component={requireAuthentication(Requests)} />
        <Route path="account" component={requireAuthentication(Account)} />
        <Route path="main" component={requireAuthentication(Arrival)} />
        <Route path="*" component={DetermineAuth(NotFound)} />
    </Route>
);
