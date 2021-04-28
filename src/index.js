import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import App from "./components/App";
import Jokes from "./components/Jokes";
import './index.css';
import {createBrowserHistory} from "history";

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route path='/jokes' component={Jokes}></Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);