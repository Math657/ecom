import React from 'react';
// import ReactDOM from 'react-dom';
// import Connect from '../components/Connect/Connect'
// import Header from '../layout/Header'
import Cart from '../components/Cart/Cart'
// import { Home } from '../components/Home';

// import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../layout/Header';

export default function Routes() {
    return(
        <div>
            <Header />
            <Cart/>
            {/* <Router>
                <Switch>
                    <Route exact path="/connect" component={Connect} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </Router> */}
        </div>
    )
}