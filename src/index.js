import './index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import DetailsView from './components/DetailsView';
import Home from './components/Home';
import LeftNav from './components/LeftNav';
import React from 'react';

render(
    <BrowserRouter>
        <div className="container">
            <Route path="/:identity?" component={LeftNav} />
            <Switch>
                <Route path="/:identity" component={DetailsView} />
                <Route path="" component={Home} />
            </Switch>
            <div className="clearfix" />
            <footer>
                Made with ♥ by <a href="https://scottdover.com" target="_blank">Scott Dover</a>
            </footer>
        </div>
    </BrowserRouter>,
    document.getElementById('app')
);

module.hot.accept();
