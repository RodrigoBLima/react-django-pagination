import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import ListPost from './ListPost';
import FormPost from './FormPost';


const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={FormPost} />
            <Route path="/list" component={ListPost} />
        </Switch>
    </BrowserRouter>
)

export default Router