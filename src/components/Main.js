import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
    </Switch>
)

export default Main;