import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
// import Connect from './components/Connect/Connect'
import Cart from './Cart/Cart'
import Routes from '../routes'
import Header from '../layout/Header'
// import Header from './layout/Header'
// import Signup from './components/Signup/Signup'

function Index() {
    return (
        <div>
            <Cart />  
            <Header />      
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
