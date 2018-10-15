import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import initServices from './initializers/services';
initServices();

import { getStore, getHistory } from 'infrastructure/redux/store';
import * as initDefaultModules from './initializers/initDefaultModules';

import MainApp from './core/MainApp';
import SiteURL from './initializers/routes';

ReactDOM.render(
    <MainApp store={getStore()} history={getHistory()} siteUrl={SiteURL}/>, 
    document.getElementById('app')
);

