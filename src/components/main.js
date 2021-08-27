import React from 'react';
import Nawigation from './navigation';
import Footer from './footer';
import SignUp from './sigUp';
import Home from './home';
import SignIn_w from './wrapComponents/signIn_w';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Main extends React.Component {
    render() {
        return (
            <Router>
                <Nawigation />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/signUp">
                        <SignUp />
                    </Route>
                    <Route path="/signIn">
                        <SignIn_w />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}