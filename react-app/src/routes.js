import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ListPost from './ListPost/index';
import FormPost from './Posts/index';


const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={FormPost} />
            <Route path="/list" component={ListPost} />
        </Switch>
    </BrowserRouter>
)

export default Router