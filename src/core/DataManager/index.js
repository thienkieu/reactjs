import coreReducer from './reducer/index';
import { injectReducer } from 'infrastructure/reducer/index';

const initCoreModule = function(store) {
    injectReducer(store, 'coreModule', coreReducer);
}

export default initCoreModule;