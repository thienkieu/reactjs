import * as React from 'react';
import { push } from 'connected-react-router';

import getStore from 'store';

const register = () => {
    getStore().dispatch(push('/'));
}
export const Register = () => {
    return (
        <div>
            <section className={'content'} >This is register page</section>
            <button onClick={register}> Register </button>
        </div>
    );
}
