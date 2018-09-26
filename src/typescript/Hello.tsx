import * as React from "react";

import getStore from '../core/store';
import { push } from 'connected-react-router';

const login = () => {
    getStore().dispatch(push('/login'));
}

const register = () => {
    getStore().dispatch(push('/register'));
}

export interface HelloProps {
    complier: string;
    framework: string;
}

export const Hello = (props: HelloProps) => {
    return (
        <div>
            <h1>Hello from {props.complier} and {props.framework}!</h1>
            <button onClick={login}> login </button>
            <button onClick={register}> Register </button>
        </div>
    )
}
