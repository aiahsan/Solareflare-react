import React from 'react';
import Home from '../pages/home'
import Key from '../pages/accesskey'
import Dashboard from '../pages/dashboard'
import {useSelector} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Routes = () => {

    const address=useSelector(x=>x.address);
    return <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>

            <Route exact path="/wallet">
            {
                address!=null?<Dashboard />: <Key />

            }
            </Route>

        </Switch>
    </Router>
}
export default Routes;