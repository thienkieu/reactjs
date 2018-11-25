import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import { initStore, getStore } from 'infrastructure/interfaces/storage';
import SiteURL from './initializers/routes';
import { App } from 'coreModule/src';

ReactDOM.render(
    <App store={initStore()} siteUrl={SiteURL} />, 
    document.getElementById('app')
);

