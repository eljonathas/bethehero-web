import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route'

import Logon from '../pages/Logon';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import NewIncident from '../pages/NewIncident';


export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact hasLogged component={Logon}></Route>
            <Route path="/register" exact hasLogged component={Register}></Route>

            <Route path="/profile" exact component={Profile} isPrivate></Route>
            <Route path="/incidents/new" exact component={NewIncident} isPrivate></Route>
        </Switch>
    );
}