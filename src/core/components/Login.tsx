import * as React from 'react';
import { push } from 'connected-react-router';

import getStore from 'store';

const login = () => {
    getStore().dispatch(push('/'));
}
export const Login = () => {
    return (
        <div>
            <section className={'content'} >This is login page </section>
            <button onClick={login}> login </button>
        </div>
    );
}
