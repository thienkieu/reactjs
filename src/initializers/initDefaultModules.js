import { getStore, getHistory } from   'store';

import initCoreModule from 'coreModule/DataManager/index';
import initUserModule from 'userModule/initailize';
import initThemeModule from 'themeModule/initailize';

let store = getStore();
initCoreModule(store);
initUserModule(store);

const supportThemes = {
    default: {
        color: 'red',
        backgroundColor: 'white',
    },
    custome1:{
        color: 'white',
        backgroundColor: 'yellow',
    }
}

initThemeModule(store, 'default', supportThemes);
