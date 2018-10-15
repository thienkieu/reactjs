import coreReducer from './reducer/index';
import { injectReducer } from 'infrastructure/redux/index';

const initCoreModule = function(store) {
    injectReducer(store, 'coreModule', coreReducer);
}

export default initCoreModule;