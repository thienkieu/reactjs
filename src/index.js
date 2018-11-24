import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import { initStore, getStore } from 'infrastructure/interfaces/storage';
import SiteURL from './initializers/routes';
import App from 'coreModule/components/App';

//import * as initDefaultModules from './initializers/initDefaultModules';

/*import MainApp from './core/MainApp';


ReactDOM.render(
    <MainApp store={getStore()} history={getHistory()} siteUrl={SiteURL}/>, 
    document.getElementById('app')
);
*/


const store = initStore();

ReactDOM.render(
    <App store={store} siteUrl={siteUrl} />, 
    document.getElementById('app')
);

