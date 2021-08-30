import React from 'react';
import Nawigation from '../Layout/navigation';
import Footer from './footer';
import SignUp from '../Registration/sigUp';
import Home from './home';
import Books from '../Authors and Books/books';
import Authors from '../Authors and Books/authors';
import CreateAuthore from '../Authors and Books/createAuthore';
import CreateBook from '../Authors and Books/createBook';
import SignIn_w from '../wrapComponents/signIn_w';
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
                    <Route path="/books">
                        <Books />
                    </Route>
                    <Route path="/authors">
                        <Authors />
                    </Route>
                    <Route path="/createAuthore">
                        <CreateAuthore />
                    </Route>
                    <Route path="/createBook">
                        <CreateBook />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}