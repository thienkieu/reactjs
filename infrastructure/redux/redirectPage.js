import { getStore } from 'store';
import { push } from 'connected-react-router';

const redirectPage = function(link){
    getStore().dispatch(push(link));
}

export default redirectPage;