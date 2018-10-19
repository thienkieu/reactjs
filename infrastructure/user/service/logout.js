import logoutAction from '../redux/action/logout';
import logoutServer from '../api/logout';

const logout = async function() {
    logoutAction();
    await logoutServer();
    localStorage.clear();
}

export default logout;