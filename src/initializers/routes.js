import TodoApp from '../todo/components/TodoApp.jsx';
import { Content } from '../core/components/Content';
import { Footer } from '../core/components/footer/Footer';
import { Header } from '../core/components/header/Header';
import { PublicLayout, PrivateLayout } from '../themes/index';
import LoginPage from 'userModule/components/Login/LoginPage';

const SiteURL = {
    Home: {
        ContentComponent: TodoApp,
        Layout: PrivateLayout,
        path: '/'
    },
    Contact: {
        ContentComponent: TodoApp,
        Layout: PrivateLayout,
        path: '/contact'
    },
    Login: {
        ContentComponent: LoginPage,
        Layout: PublicLayout,
        path: '/login'
    },
    Register: {
        ContentComponent: Content,
        Layout: PublicLayout,
        path: '/register'
    },
}

export default SiteURL;