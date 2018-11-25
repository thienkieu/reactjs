import { redirectPage } from 'infrastructure/redux/index';
import SiteURL from 'initializers/routes';
const redirectToHome = function(){
    redirectPage(SiteURL.Home.path);
}
export default redirectToHome;