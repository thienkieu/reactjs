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
        button: {
            backgroundColor: 'linear-gradient(180deg,#f4511e 0,#d84315)',
        }
    },
    custome1:{
        color: 'white',
        backgroundColor: 'yellow',
        button: {
            backgroundColor: 'red',
        }
    }
}

initThemeModule(store, 'default', supportThemes);
