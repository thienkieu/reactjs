import * as React from 'react';
import {
    Select,
    FormControl,
    FormHelperText,
    MenuItem,
    InputLabel,
} from 'ui/Select/index';

import getActiveTheme from '../query/getActiveTheme';
import { _ } from 'libs/index';
import getListThemes from '../query/getListThemes';
import changeTheme from '../command/changeTheme';

interface Props {
    activeTheme: string,
    supportThemes: {},
}

class ThemeSelection extends React.Component<Props,any> {
    constructor(props: Props){
        super(props);
        console.log(this.props);
        this.state = {
            active: this.props.activeTheme,
        }
    }
    
    handleChange = (event: any) => {
        this.setState({ active: event.target.value });
        changeTheme(event.target.value);
    };

    render() {
        return (
            <FormControl>
                <InputLabel htmlFor="theme-selection">Select theme</InputLabel>
                <Select
                    value={this.state.active}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'theme-selection',
                        id: 'theme-selection',
                    }}
                >
                    {
                        _.map(this.props.supportThemes,(value: any, key: any)=>{
                            return (<MenuItem value={key}>{key}</MenuItem>);
                        })
                    }
                </Select>
            </FormControl>
        )
    }
};


export default ThemeSelection;