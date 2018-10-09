import * as React from 'react';
import { push } from 'connected-react-router';
import { DefaultButton, StyledButton} from 'ui/Button/index';
import { InputText } from 'ui/Input/index';

import getStore from 'store';
import * as loginCss from './login.scss';
import { withTheme } from 'libs/index';

interface Props {
    className: string,
    theme: {}
}

@withTheme
class Login extends React.Component<Props,{}> {
    state= {
        userName: 'Thien',
    }

    onLogin() {
        getStore().dispatch(push('/'));
    }
    onChangeUserName(value: string) {
        this.setState({
            userName: value,
        })
    }
    render() {
        console.log(this.props);
        return (
            <section className={this.props.className}>
                <DefaultButton>this is button</DefaultButton>
                <StyledButton>this is button</StyledButton>
                <InputText label={'Thien'} value={this.state.userName}   className={''} handleChange={(event: any)=>{this.onChangeUserName(event.target.value);}}/>
                <button onClick={()=> this.onLogin()}> login </button>
            </section>
        )
    }
};

export { Login };