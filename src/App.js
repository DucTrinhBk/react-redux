import React, { Component } from 'react';
import store from './store';
import {Provider} from 'react-redux';
import Nav from './components/nav';
import Home from './components/home';
import Users from './components/users';
import New from './components/new';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './dt.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/user';
class App extends Component {
    render() { 
        return ( 
        <Provider store = {store}>
            <Nav />
            <Router>
                <Switch>
                    <Route exact path="/users/:id" component={User}/>
                    <Route exact path="/users" component = {Users}/>
                    <Route exact path="/new" component = {New}/>
                    <Route exact path="/" component = {Home}/>
                    <Route render={ ()=><h1>The path was incorrect,please try again</h1>}/>
                </Switch>
            </Router>
        </Provider> );
    }
}
 
export default App;