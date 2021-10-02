import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
// import Connect from './components/Connect/Connect'
import Cart from './Cart/Cart'
import Routes from '../routes'
import Connect from '../components/Connect/Connect'
import Home from '../components/Home/Home'

import Header from '../layout/Header'
// import Header from './layout/Header'
// import Signup from './components/Signup/Signup'
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Index() {
    return (
        <div>      
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route path="/connect">
                                <Connect />
                            </Route>                           
                            {/* <Route exact path="/home" component={Home} /> */}
                        </Switch>
                        <Switch>
                            <Route path="/cart">
                                <Cart />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/home">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
