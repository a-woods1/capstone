/* eslint new-cap: 0 */

import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from './containers/App';
import { HomeContainer } from './containers/HomeContainer';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import ProtectedView from './components/ProtectedView';
import Requests from './components/Requests';
import Account from './components/Account';
import Overview from './components/Overview';
import Arrival from './components/Arrival';
import Interview from './components/Interview';
import NotFound from './components/NotFound';

import { DetermineAuth } from './components/DetermineAuth';
import { requireAuthentication } from './components/AuthenticatedComponent';
import { requireNoAuthentication } from './components/notAuthenticatedComponent';

export default (
    <Route path="/" component={App}>
        <Route path="main" component={requireAuthentication(ProtectedView)} />
        <Route path="login" component={requireNoAuthentication(LoginView)} />
        <Route path="register" component={requireNoAuthentication(RegisterView)} />
        <Route path="home" component={requireNoAuthentication(HomeContainer)} />
        <Route path="requests" component={requireAuthentication(Requests)} />
        <Route path="account" component={requireAuthentication(Account)} />
        <Route path="overview" component={requireAuthentication(Overview)} />
        <Route path="arrival" component={requireAuthentication(Arrival)} />
        <Route path="interview" component={requireAuthentication(Interview)} />
        <Route path="*" component={DetermineAuth(NotFound)} />
    </Route>
);
