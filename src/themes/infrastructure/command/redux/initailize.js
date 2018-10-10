import themeReducer from './updateTheme';
import { injectReducer } from 'infrastructure/redux/index';

const initThemeModule = function(store) {
    injectReducer(store, 'themeModule', themeReducer);
}

export default initThemeModule;
