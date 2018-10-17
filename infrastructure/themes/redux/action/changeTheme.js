import { updateThemeConstant } from '../constant';
import { getStore } from 'store';

const changeTheme = function(activeTheme){
    const command = {
        type: updateThemeConstant,
        payload: {
            activeTheme,
        }
    };
    
    getStore().dispatch(command);
}

export default changeTheme;

