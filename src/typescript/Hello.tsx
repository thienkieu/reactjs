import * as React from "react";
import { push } from 'connected-react-router';

import { InputText } from 'ui/Input/index';
import { changeTheme } from 'themeModule/index';
const login = () => {
    //getStore().dispatch(push('/login'));

    const updateTheme = {
        type: 'updateTheme',
        payload: {
            theme: { color: 'blue'},
        }
    }
   // getStore().dispatch(updateTheme);
}

const register = () => {
    //getStore().dispatch(push('/register'));
}

const onChange = (event: any) => {
    console.log(event);
    console.log(this);
}

export interface HelloProps {
    complier: string;
    framework: string;
    theme: any;
}

class Hello  extends React.Component<HelloProps>{
    state= {
        background: 'red',
        color: 'white',
    }

    onChangeBackground(value: string) {
        this.setState({
            background: value,
        });
    }

    onChangeColor(value: string) {
        this.setState({
            color: value,
        });
    }

    changeBackground() {
        changeTheme(this.state.background);
    }

    render() {
        return (
            <div>
                <h1>Hello from {this.props.complier} and {this.props.framework}!</h1>
                
                <InputText label={'Background value'} value={this.state.background}   className={''} handleChange={(event: any)=>{this.onChangeBackground(event.target.value);}}/>
                <button onClick={() => this.changeBackground()}> Change Theme background </button>
                <br/>
                <br/>
                <InputText label={'color value'} value={this.state.color}   className={''} handleChange={(event: any)=>{this.onChangeColor(event.target.value);}}/>
                <button onClick={() => this.changeBackground()}> Change Theme color </button>
                <br/>
                <button onClick={register}> Register </button>
            </div>
        )
    }
}

export { Hello } 
