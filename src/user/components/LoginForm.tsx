import * as React from 'react';
import login from '../interact/login';

interface LoginFormProps {
    handleLogin: Function,
}

class LoginForm extends React.Component<LoginFormProps,any> {
    constructor(props: LoginFormProps){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    onChangeUserName(value: string) {
        this.setState({
            username: value,
        })
    }

    onChangePassword(value: string) {
        this.setState({
            password: value,
        })
    }

    componentWillMount() {
        //need to checkout user login or not 
        // if not login we need to fetch user or change to login page => 
        //logService.log('ThemeManager --- componentWillMount');
    }

    render() {
        return (
            <div>
                <label>username</label>
                <input type="text" id="username" value={this.state.username} onChange={(event: any) =>{this.onChangeUserName(event.target.value);}} /> 
                <br/>
                <label>password</label>
                <input type="password" id="password" value={this.state.password} onChange={(event: any) =>{this.onChangePassword(event.target.value);}} />
                <br/>
                <button onClick={()=>{login(this.state.username, this.state.password);}}>login</button>
            </div>
        )
    }
};

/*const mapStateToProps = (state: any) => { 
    const activeTheme = getActiveTheme(state);
    const supportThemes = getListThemes(state);
    return {
        activeTheme,
        supportThemes,
    };
};*/

export default LoginForm;