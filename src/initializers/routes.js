import TodoApp from '../todo/components/TodoApp.jsx';
import { Content } from '../core/components/Content';
import { Footer } from '../core/components/footer/Footer';
import { Header } from '../core/components/header/Header';
import { PublicLayout, PrivateLayout } from '../themes/index';
import LoginForm from 'userModule/components/LoginForm';


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
        ContentComponent: LoginForm,
        Layout: PrivateLayout,
        path: '/login'
    },
    Register: {
        ContentComponent: Content,
        Layout: PublicLayout,
        path: '/register'
    },
}

export default SiteURL;