import initThemeData from './reducer/updateTheme';
import { injectReducer } from 'infrastructure';

const initThemeModule = function(store, activeTheme, supportThemes) {
    injectReducer(store, 'themeModule', initThemeData(activeTheme, supportThemes));
}

export default initThemeModule;
