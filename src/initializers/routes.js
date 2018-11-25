import PublicLayout from 'themeModule/src/component/PublicLayout';
import UserModuleWithRedux from 'userModule/infrastructure/UserModuleWithRedux';
import CoreModuleWithRedux from 'coreModule/infrastructure/CoreModuleWithRedux';

const SiteURL = {
    userModule: {
        ContentComponent: UserModuleWithRedux,
        Layout: PublicLayout,
        path: '/user'
    },
    coreModule: {
        ContentComponent: CoreModuleWithRedux,
        Layout: PublicLayout,
        path: '/core'
    }   
}

export default SiteURL;