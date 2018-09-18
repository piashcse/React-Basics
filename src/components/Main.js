import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../screens/LandingPage';
import AboutMe from '../screens/AboutMe';
import Login from '../screens/Login';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/login" component={Login}/>
    </Switch>
)

export default Main;