import { getStore, getHistory } from '../../infrastructure/redux/store';

import initCoreModule from 'coreModule/DataManager/index';
import initUserModule from 'userModule/DataManager/index';
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

export default getStore;
export {
    getHistory
}
