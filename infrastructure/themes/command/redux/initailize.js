import initThemeData from './updateTheme';
import { injectReducer } from 'infrastructure/redux/index';

const initThemeModule = function(store, activeTheme, supportThemes) {
    injectReducer(store, 'themeModule', initThemeData(activeTheme, supportThemes));
}

export default initThemeModule;
