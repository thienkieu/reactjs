import initThemeModule from './redux/initailize';
import changeTheme from './redux/action/changeTheme';

import getSelectedTheme from './selector/getSelectedTheme';
import getActiveTheme from './selector/getActiveTheme';
import getListThemes from './selector/getListThemes';

export default initThemeModule;
export {
    changeTheme,
    getActiveTheme,
    getSelectedTheme,
    getListThemes
}
