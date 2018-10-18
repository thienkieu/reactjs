import { redirectPage } from 'infrastructure/redux/index';
import SiteURL from 'initializers/routes';
const redirectToLogin = function(){
    redirectPage(SiteURL.Login.path);
}

export default redirectToLogin;