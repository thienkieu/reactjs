import themeReducer from '../reducer';
import { injectReducer } from 'infrastructure/reducer/index';
import { getSelectedTheme } from './reselector/index';

const initThemeModule = function(store) {
    injectReducer(store, 'themeModule', themeReducer);
}

export default initThemeModule;

export { getSelectedTheme }